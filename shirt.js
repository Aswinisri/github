//shirts
const productData = [
    {
        name: "full hand shirt",
        description: "raymond",
        products: [{
            colorname: "blue",
            data: [{
                size: "small",
                 qty: 10
            },
            {
                size: "medium",
                qty: 20
            },
            {
                size: "large",
                qty: 10
            }]
        },
        {
            colorname: "custardYellow",
            data: [{
                size: "medium",
                qty: 30
            },
            {
                size: "large",
                qty: 20
            }

            ]
        }]
    },
    {
        name: "tees",
        description: "allon solly",
        products: [{
            colorname: "black",
            data: [{
                size: "small",
                qty: 2
            },

            {
                size: "medium",
                qty: 10,
            },
            {

                size: "large",
                qty: 3
            }]
        },

        {
            colorname: "white",
            data:
            {
                size: "large",
                qty: 20
            }


        }]

    }];


console.log(productData[0].name);
console.log(productData[1].products[0].data[1]);
 