

export interface Color{
    lightColor : string
    darkColor : string
    iconColor : string
    fontColor : string
}

export interface Colors{
    [key: string]: Color
}


export let PaletteColors : Colors = {

    "defaultColor" : {
        lightColor : '#6c6c6c27',
        darkColor : '#000',
        iconColor : '#7cffe1',
        fontColor : '#fff'
    },

    "purpleColor" : {
        darkColor : '#100a2c',
        lightColor :'#191232',
        fontColor : '#fff',
        iconColor : '#8be1e1'
    },

    "blackColor" : {
        darkColor : '#0c0c0c',
        lightColor : '#78787827',
        fontColor : '#83ffba',
        iconColor : '#fff'
    },

    "brownColor" : {
        darkColor : '#7e6c42',
        lightColor : '#857552',
        fontColor : '#fff',
        iconColor : '#3e2f03'
    },

    "blueColor" : {
        darkColor : '#0a0d2c',
        lightColor : '#262f4873',
        fontColor : '#fff',
        iconColor : '#83ffba'
    },

};
