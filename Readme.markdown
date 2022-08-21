# <p align ="center"> _VRIDDHI_ </p>

**<p align = "center">Welcome to Vriddhi**<br><br>_**Vriddhi**_ in Sanskrit means _Progress_, and we seek for `Progress` of our `Education System` by means of a website that helps in highlighting `Key Statistics` based on various Parameters defined by us. We have interlinked 3 levels of education namely *Primary*, *Secondary* ,and *Technical Education.* </p>
<br>
**Key goals of this website at a glance:-**
- We have a `Master Database` for the three Major `Levels of Education`.
- We have defined parameters and generated Key Statistics.
- Our users can identify the `Grey Areas` of our `Education System`.



# **Contents**
- ## [Installations <kbd></kbd>](#Installations)
- ## [Front End <kbd></kbd>](#front-end)
    - ### Login/Register Page 
    - ### Various Sites of this Interlinked Platform.
        - #### Home Page
        - #### Literacy Page
        - #### Enrollment Page
        - #### Gender Parity Index Page
        - #### Out Turn Stats Page
        - #### Pass-Fail Page
        - #### Levels Of Education Page
        - #### Teacher-Student Stats Page
        - #### Caste Based Statistics Page
        - ####  States Page
    - ### Technologies used
    - ### Workflow 
    - ### Data provided by us
- ## [Backend <kbd></kbd>](#back-end)
    - ### API
    - ### Technologies used

- ## [Contributions <kbd></kbd>](#contributions)
# **Installations**

<br>

## Softwares or Packages Required:

- Node JS
    - NPM
- Git
- VS Code
- Live Server (VS Code Extension)
- And a Browser to Preview

<br>

## NPM

```
npm install 

npm run dev

```
;![](https://imagizer.imageshack.com/img924/3479/PjK1rl.png)


# **Front End**

<div style="text-align: right">

[Go to Contents <kbd>&uarr;</kbd>](#contents)
</div>


In the front end we have various components as listed below and have built it in a very robust way to render *Dynamic Visualizations* like *Charts or Graphs* Based on various *Statistical Data or Parameters* related to the Education System. 

<br>

## _Home Page_

 Home Page is the center stage of the space we have made for our users vibrantly designed with the required Components for searching various Parameters.

<details><summary>Key components of this page:-</summary>

<details><summary>
-  Universal Search Bar</summary>

#### Key Features
>This Search Bar is one stop solution if you quickly want to access a particular page or feature, this search bar will help you to go to States, Different Pages based on Parameter, or even Based on Levels of Education.
>
>img!
</details>

<details><summary>- An India Map along with the key Educational Statistics.
</summary> 
#### Key Highlights Of this Dynamic Map
>This is one of the Key highlights of the many we are hosting on this site, This is a Dynamic Map wherein, If the user hovers their cursor over a particular Indian State we get the Key Statistics of the particular State like dropout rate, etc..,
And if we click on a particular state we'll be redirected to a particular State page with in-detail information regarding that particular site.
>img!!
</details>

<details><summary>
- A Chatbot named Sarathi for quick access to parameters of particular Education Level or State.</summary>

#### Functionality Of the Chatbot
>This Chatbot helps user to navigate through the webpage and get to the right page with required info or to give a feedback.
>img!
</details>

<details><summary>
- Searching based on different levels of education like Primary,Secondary, Technical.</summary>

#### Levels Of Education
>The Visitor gets information regarding various parameters like(Drop-out,etc..,) for different Levels of Education:
>-Primary Education
>-Secondary Education
>-Technical Education
>img!
> Link: https://sih-codinos-jayendramadaram.vercel.app/levels/primary
</details>
<details><summary> - Initiatives undertaken by Government Of India(GOI) in Education Sector.</summary>

We are also highlighting the Key initiatives taken by Government Of India(GOI) in the Education Sector.
</details>



</details>
<br>

## _Login Page_

<details><summary>
This Login Page is designed specially for the Educational Administrators to Register/Login to their Account.</summary> 
This account will help them upload key information from Primary Data Collection(field surveys etc) from time to time to contribute to our Database.  
This will also help them to get stats specific to their Region or concise reports on the grey areas and the factors that need improvement in their Region. ->Significance Of having an Account on this platform
>We are providing our Site Visitors the option to create an account on our platform, which will provide the visitors additional features like data exports in various formats like .csv, .JSON,etc..,
>
>Also Data imports which will entitle User to upload the data they have in various formats(like .csv,JSON,etc..,) and based on the data uploaded they'll get charts also they can help contribute to our platform, also the registered users are entitled to get monthly newsletters. 
</details> 


## _Literacy Rate Page_

<details><summary>
Literacy Page is made with every minor detail taken care of and we're showing the statistics dynamically.</summary>

#### Key Features of this Page
> As soon as you enter this page you are greeted with an india map and if you click on a particular state you'll see the literacy stats of that particular state.
>
>There's a box showing the Country Stats with percentage change over decades,etc..,

>Also we're implementing a pie-donut chart which'll show the literacy among different Caste, also there's a very well dynamically implemented table which shows Literacy Rate of different levels of Education.

</details>

### _Enrollment Page_
<details><summary>
Enrollment Page is for visitors to get key enrollment metrics in India.
</summary>

#### Benefits Of this Page
> We've retained the India map so the user can feel homely and also again explore stats of that particular state which they select.
>
>Also we're using a `flex-box` to show key statistics related to Student enrollment in various Levels of Education.
>
>Also we've implemented Pie-Donut Chart to highlight key stats like rate of enrollment across different castes. And a table with data related to enrollment among different levels of education. And we have a dynamic graph to show the stats as well.
>img!

</details>

#### Gender Parity Index Page

<details><summary>

</summary>
</details>

<br>

## Technologies used

The technologies used to build front end are:-
- Typescript(Combination of JS, HTML and CSS).
- Tailwind CSS for Styling.
- Vercel Platform for hosting.

<br>

## Workflow

1. As the user enters our website, he will be introduced to a home screen as shown below :
2. From here he can go to the India map and hover on it to find the key stats of various states. By clicking on a particular state he will be redirected to the state page.

3. After being redirected to a state page he can hover on the State Map to further explore the Respective District 

4. In the state page we will provide the user various parameters by which he can search. eg:- Literacy Rate, Drop Out Rate, etc.., 

5. Graphs will be Dynamically Visualized and shown to the user based on the selected Parameters.

6. Further a link will be provided to the various initiatives taken by state govt in the education sector of that state 

7. On the home page below the India Map we can find division based on various levels of education like the primary, secondary, higher secondary and technical.
   
8. A user can click on any of these levels and he will be redirected to that particular page.
9. In this page we have Key Stats regarding that Level of Education and various Parameters( EG:-literacy rate,drop out rate etc) that the user can search.

10. We have a Bot called *Sarathi* to the bottom right corner of the website which acts as a quick access to a Particular State or Education Level or Parameter of Measure.  

11. We have a Login Component on the top right corner of our website.

12. As we scroll to the end of the website we can see a list of various initiatives undertaken by the GOI to improve the education sector like NEP(New Education Policy 2020) etc..,

13. Also we are planning to give a feature to compare two States or Union Territories and the Key Statistics to help Frame better Policies. 
</details>
<br>

## Data Provided By Us

 The following data is being provided by us:-   
 
 - Literacy Rate: 
    - Based on Gender
    - Based on Economic Status 
    - Based on States and Territories
    - Based on Years
    - Based on Education Level
    - Based on Caste( EG:-SC,ST)
- Dropout Rate:
    - Based on Gender
    - Based on Economic Status 
    - Based on States and territories
    - Based on Years
    - Based on Education Level
    - Based on Caste( EG:-SC,SC)
- Gross Enrollment Ratio:
    - Based on Gender
    - Based on Economic Status 
    - Based on States and Territories
    - Based on Years
    - Based on Education Level
    - Based on Caste( EG:-SC,ST)
- Pass Percentage and Fail Percentage: 
    - Based on Gender
    - Based on Economic Status 
    - Based on States and Territories
    - Based on Years
    - Based on Education Level
    - Based on Caste( EG:-SC,ST)
- Gender Parity Index: 
    - Based on Economic status 
    - Based on States and Territories
    - Based on Years
    - Based on Education Level
    - Based on Caste( EG:-SC,ST)
- Outturn:
    - Based on Discipline of Study
    - Based on State
- Pupil Teacher Ratio:
    - Based on State 
    - Based on Discipline of Study
- Number of Schools and College: 
    - Based on States and Districts 
    - Based on Level of Education 
    - Based on Type(Eg:- Public, Private)

<br>

# **Back-End**
<div style="text-align: right">

[Go to Contents <kbd>&uarr;</kbd>](#contents)
</div>
In the Backend we have various components as listed below and have built it in a very robust way to provide efficient Routing *Dynamic Visualizations* like *Charts or Graphs* Based on various *Statistical Data or Parameters* related to the Education System. 

<br>

## Technologies used

The Technologies used to build Backend are:-
- MongoDB Atlas
- Mongoose
- Express
- CORS Policy

<br>

<div style="text-align: right">

[Go to Backend <kbd>&uarr;</kbd>](#contents)
<br>
</div>


**API Base URL**: **https://mighty-spire-15674.herokuapp.com/**

## Dependencies to be installed
```
npm i "dependency name without quotes"
```
Install the following Dependencies
 - express
 - mongoose
 - dotenv
 - JsonWebToken
 - cors
 - Joi
 - multer
 - CsvtoJson

For user authentication there are two routes:
 - [register](https://mighty-spire-15674.herokuapp.com/register) 
 - [login](https://mighty-spire-15674.herokuapp.com/login)

Endpoints can be hit like this:
 - https://mighty-spire-15674.herokuapp.com/register 
 - https://mighty-spire-15674.herokuapp.com/login

<br>

For JWT authentication, user request body will be:

    {
        name: string,
        email: string,
        password: string,
    }
    
 <br>

If JWT failed and user is not valid then error responses are as such:

    res.status(400).json({
        auth: false,
        id: null,
        errMsg: "User is not valid"
    });

<br>

If user is valid but JWT token failed to be verified, then error response:

    res.status(400).send('Invalid Token');

<br>

If JWT succeeded and a JWT token is generated, success response as such:

    res.status(200).header('auth-token', token).json({
        auth: true,
        id: currentuser._id,
        errMsg: null
    });

<br>

After login, user has two kinds of routes to navigate to:

 - State-data (Data which is sorted state-wise)
 - Historic-data (Nation-wise data)

For state-data, we have the following routes

 - [Dropout-state rate](https://mighty-spire-15674.herokuapp.com/state-data/dropout-rate/)
 - [Literacy-state rate](https://mighty-spire-15674.herokuapp.com/state-data/literacy-rate/)
 - [Pass-fail-state rate](https://mighty-spire-15674.herokuapp.com/state-data/pass-fail-rate/)
 - [Enrollment-state rate](https://mighty-spire-15674.herokuapp.com/state-data/enrollment-rate/)

Similarly for historic data we have:

 - [Dropout-rate](https://mighty-spire-15674.herokuapp.com/historic-data/dropout-rate/)
 - [Literacy-rate](https://mighty-spire-15674.herokuapp.com/historic-data/literacy-rate/)
 - [Pass-fail-rate](https://mighty-spire-15674.herokuapp.com/historic-data/pass-fail-rate/)
 - [Enrollment-rate](https://mighty-spire-15674.herokuapp.com/historic-data/enrollment-rate/)

For state-data routes, required parameters are:

    { year: 2012 }    // 2000-2022

<br>

For historic-data, required parameters are:

    {
      "from": 2000,
      "to": 2022,
      "state": "Telangana",  // Optional
      "standard": "prim"     // ["prim" or "second" or "tech"]
    }

If state is not mentioned in the payload, the result will be fetched choosing Telangana as state.

<br>

For state data, the response will be as such:

    "prim": {
        "Andhra Pradesh": {
          "boys": 94.99310018314823,
          "girls": 118.30858281766072,
          "year": 2003
        },
        "Arunachal Pradesh": {
          "boys": 118.09231171110062,
          "girls": 131.3037404087724,
          "year": 2003
        },
        .
        .
        .
        .
    },
    "second": {
        "Andhra Pradesh": {
          "boys": 149.1500511133867,
          "girls": 112.12740911347281,
          "year": 2003
        },
        "Arunachal Pradesh": {
          "boys": 87.48342421039635,
          "girls": 96.82385887484756,
          "year": 2003
        },
        .
        .
        .
    },
    "tech": {
        "Andhra Pradesh": {
          "boys": 122.07672440191321,
          "girls": 142.58155703087033,
          "year": 2003
        },
        "Arunachal Pradesh": {
          "boys": 99.5942711237684,
          "girls": 118.53249748432572,
          "year": 2003
        },
        .
        .
        .
     }

<br>

For historic-data, the response will be:

    {
      "boys": [
        123.83873646297039
      ],
      "girls": [
        120.2546346731755
      ]
    }
    
<br>

There is a route called `upload-csv` to upload data from CSV files to MongoDB database.
It is a dynamic route and it can be accessed as:

 - https://mighty-spire-15674.herokuapp.com/:collection-name

Here `collection-name` decides the MongoDB collection where the data is being uploaded to.

<br>

If the `collection-name` does not match with any of the collections in MongoDB, then response error is as such:

    res.status(404).json({ error: "route does not exist" }); 

This is route takes a `.csv` file as request parameter.

<br>

If any other type of file is sent from client other than `.csv` the following is error is the response:

    res.status(401).json({ error: "file type unsupported" });

<br> 

If the data in CSV-file is not valid or does not contain all the necessary attributes:

    res.status(401).json({ error: "invald headers" });

<br> 

In case of any Database failure:

    res.status(500).json({ error: `DB Insert fail ${error.toString()}` }) 

<br> 

If the requested data is valid and data insertion was successful, then success response:

    res.json({ message: `Inserted ${x} rows in ${y} collection` });

Uploaded file will be deleted immediately after completion of the operation and response is sent.

<br><br>
# **Contributions**

- ### [**P.S.Vaishnavi**](https://github.com/psvaish) {Front End Developer}
- ### [**Sahil Apte**](https://github.com/SahilApte) {Full Stack Developer}
- ### [**Santosh Kiran Sulake**](https://github.com/Ssulakhe39) {Front End Developer}
- ### [**Srikanth Macha**](https://github.com/Srikanth-Macha)  {Backend Developer}
- ### [**Jayendra Madaram**](https://github.com/jayendramadaram) {Full Stack Developer}
- ### [**D Srikhar Shashi**](https://github.com/srikharshashi) {Backend Developer}
- ### [**Vijayakash Allenki**](https://github.com/vijayakashallenki)  {Full Stack Developer}


