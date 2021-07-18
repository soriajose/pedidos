import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  productos : Producto[] = [];

  listaProductos = "";

  constructor(private productoService: ProductoService, private toastController: ToastController) { }

  ngOnInit() {

    this.productoService.getProductos().subscribe(
      respuesta => {
        this.productos = respuesta;
      }
    );

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  agregarProducto(producto: Producto){

    this.listaProductos += JSON.stringify("Producto: " + producto.title + " Precio: " + producto.price) + "\n";

    this.presentToast('Se agrego al carrito');
    
  }

  finalizarPedido(){
    
    window.open(`https://wa.me/+5493825520391?text=${encodeURIComponent(this.listaProductos)}`);

    this.listaProductos = "";

  }

}
