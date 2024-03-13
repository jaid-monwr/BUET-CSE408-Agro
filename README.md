# AGRO 
#### This is an ecommerce project. This project focuses on the interaction between Farmers and WholeSellers. And our platform works as the middle man.


![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/2.PNG)


# Index

- # [Overview](#overview)
- # [Stack](#stack)
- # [Prepping on Local Machine](#prep)
- # [Running](#run)


## [Overview]

We Have implemented 3 modules in this project.  
- Admin
- Seller
- Client 



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

![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/12.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/13.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/14.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/15.PNG)

## Seller
Farmer/Seller must create an account in our platform to access the facilities that our platform provides. He must connect a Stripe account for future transactions. To set his sccount active, he requires approval from the admin. A Farmer can:

1. Add Products to his shop
2. Update Products Information
3. Chat with Admin
4. Chat with customers
5. Request For money Withdrawl


![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/7.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/8.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/9.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/10.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/11.PNG)

## Client
CLient can create an account in our platform to get services provieded by our platform. A client can:
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

![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/3.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/4.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/5.PNG)
![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/6.PNG)


## [Stack]

![Alt Text](https://github.com/jaid-monwr/BUET-CSE408-Agro/blob/main/pictures/1-modified.PNG)


## [Prepping command]

### Go to project directory

```
cd backend
npm i
cd ..
cd client
npm i
cd ..
cd dashboard
npm i
cd ..
```

## [Run command]

```
cd backend
npm run server
cd ..
cd client
npm start
cd ..
cd dashboard
npm start
cd ..
```

In conclusion, we extend our sincere gratitude to our supervisor, Hasebul. His guidance and support have been invaluable throughout this endeavor.

Special Thanks to our supervisor [Hasebul Hasan Shawon](https://www.linkedin.com/in/hasebul-hasan-shawon-a618091aa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAt2zCGa4QEu27LiM%2F27GaA%3D%3D).

