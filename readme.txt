Components:
    - Shopping Cart Component:
        Body of app, contains 3 smaller compontents: Filters, product-list, Cart (left -> right of screen respectively)

        * Filters Component:
        does very little at the moment. No functionality built into this component at the moment

        * Product-List Component: (child component: Product-Item)
          Creates an empty array of products and on initialization generates a product-list via the Product Service

            > Product-Item Component:
                Recieves a product as input from product-list component
                Sends a product to the cart component via Messenger Service
                uses method handleAddToCart()

        * Cart Component: (child component: cart-item)
          initializes an empty array of cart-items
          on initialization the component observes messenger service and waits for a product to be sent
          then calls addProductToCart method to push product into cart-items array

          > Cart-Item Component:
Services:
    - Product-Service:
    - Messenger-Service:
          
          