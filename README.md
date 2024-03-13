# AGRO 
#### This is an ecommerce project. This project focuses on the interaction between Farmers and WholeSellers. And our platform works as the middle man.

[Jump to Section 2](#section-2)


We Have implemented 3 modules in this project.  
- Admin
- Farmer/Seller
- Client/WholeSeller 

## Section 2 {#section-2}


## Admin
Our platform is the *Admin*. Every transactions must go by the approval of *Admin*. 

The things that admin can do: 
1. Add Categories
2. See dashboard
3. Chat with Sellers
4. Activate any Seller account
5. Deactivate any Seller account
6. Approve transactions requests
7. Approve any order and Update order Status

It is the responsibility of the Admin to arrange these things properly. 

## Farmer/Seller
Farmer/Seller must create an account in our platform to access the facilities that our platform provides. He must connect a Stripe account for future transactions. To set his sccount active, he requires approval from the admin. A Farmer can:

1. Add Products to his shop
2. Update Products Information
3. Chat with Admin
4. Chat with customers
5. Request For money Withdrawl

## Client/WholeSeller
CLient/WholeSeller can create an account in our platform to get services provieded by our platform. A client can:
1. View Products
2. Filter Products
3. Rate Products
4. Review Products
5. Add to cart Products
6. Add to Wishlist Products
7. Increase or Decrease amount of Products
8. Place Orders
9. Cancel Orders
10. Chat with Farmers/Sellers
11. See status of placed orders

A client can Filter products by Rating, Price, Category and Area. When a client attempts to place a order he must pay using "Stripe" to complete order. Then he can see the status of the order in the client dashboard. The Status of order is controlled by Admin and Seller. 
