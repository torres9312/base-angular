

export class MenuItems {
    public static Menu: Array<any> = [
        {
          tipo : 'standard',
          nombre : 'Dashboard',
          ruta : 'dashboard',
          icono : 'fa-solid fa-gauge-high'
        },
        {
          tipo : 'standard',
          nombre : 'Imagenes',
          ruta : 'imagenes',
          icono : 'fa-regular fa-image'
        },
        /* 
        {
          tipo : 'submenu',
          nombre : 'Categorias',
          icono : 'fa-solid fa-sitemap',
          subitems : [
            {
              nombre: 'SVG',
              ruta : 'svg'
            },
            {
              nombre: 'Vectores',
              ruta : 'vectores'
            },
            {
              nombre: 'PNG / JPG',
              ruta : 'imagen'
            }
          ]

        } 
        */
      ];
}