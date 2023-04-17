const fs = require('fs');

const getProducts = [];

class ProductManager{
    static id = 1;
    
     constructor(title , descriptions , price , thumbnail , code , stock , id){
        this.title = title,
        this.descriptions= descriptions,
         this.price = price,
        this.thumbnail = thumbnail ,
        this.code =code ,
        this.stock = stock,
        ProductManager.id;
     }
   
    
addProduct(){

    const productos = {
       
        title : this.title,
        descriptions: this.descriptions,
        price : this.price ,
        thumbnail : this.thumbnail,
        code :  this.code,
        stock : this.stock,
        id : ProductManager.id,
        
        }
       
       



        const verificarCodigo = getProducts.find(elemento => elemento.code === productos.code) 
           
       if (verificarCodigo)
       {
        throw new Error('hay codes iguales')  }
        else{
            ProductManager.id ++ 
            getProducts.push(productos);
            
        }

       
    
    }

     getById(id){
        const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
        obtenerproductos.map((element)=>{ if(element.id == id)
            console.log(element)
         })

        
        
      
        
    }

    guardaEnArchivo(){
        try{
            fs.writeFileSync('productos.json', JSON.stringify(getProducts));
    
        }catch(err){
            throw new Error (err);
    
        }
    
    }
 
    cargarElArchivo(){
        try{
            
            const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
           return obtenerproductos;
        }catch(err){
            throw new Error(err);
        }
    }
    modificarArchivo(id , nuevosDatos){
        
        getProducts.map((element)=>{
            if(element.id == id ){
              element.title = nuevosDatos.title;
              element.description = nuevosDatos.description;
              element.price = nuevosDatos.price;
              element.thumbnail = nuevosDatos.thumbnail;
              element.code = nuevosDatos.code;
              element.stock = nuevosDatos.stock;
              element.id = id;

                console.log(id);
            }
            fs.writeFileSync('productos.json', JSON.stringify(getProducts));
            
        })
    }

        borrarProductos(id){
            const productoborrar = [];
            getProducts.map((element)=>{
                if(element.id !== id){
                    productoborrar.push(element);


                }
                fs.writeFileSync('productos.json', JSON.stringify(productoborrar));
            })

        }
        
     
    }

    






let producto1 = new ProductManager("regla" , "30 cm" , 50 , "www.regla.com" , 1100 , 23 );


producto1.addProduct();
let producto2 = new ProductManager("escuadra" , "triangular" , 12, "www.escuadra.com" , 100 , 12);
producto2.addProduct();
let producto3 = new ProductManager("lapiz" , "de color" , 11, "www.lapizdecolores.com" , 1200 , 6);
producto3.addProduct();
let producto4 = new ProductManager("marcador", "roja" , 15, "www.lapizdecolores.com" , 12040 , 64)
producto4.addProduct();
//producto4.guardaEnArchivo();
//producto4.cargarElArchivo();
let producto5 = new ProductManager("teclado" ,"mecanico" , 13 , "www.teclado.com" , 23232 , 21);
producto5.addProduct();
//producto5.guardaEnArchivo();
//producto5.cargarElArchivo();
   // producto4.getById(2);
  // producto1.modificarArchivo(1,{title:"Goma" , descriptions:"azul", code:"2331" , price:"234" , thumbnail:"www.gomaazul.com", stock:"111",});

   //producto2.borrarProductos(2);
    


   module.exports = {ProductManager}
