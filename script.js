body {
    background-color: #fce1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    margin: 0;
    overflow: hidden;
}

.container {
    text-align: center;
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    max-width: 600px;
}

h1 {
    color: #e91e63;
    margin-bottom: 20px;
}


p {
    margin-bottom: 20px;
    font-size: 1.2em;
}

.message {
    margin-top: 30px;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

button {
    background-color: #e91e63;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #d81b60;
}

#noButton {
    background-color: #9E9E9E;
}

#noButton:hover {
    background-color: #757575;
}

#gifContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}

#gifContainer img {
    max-width: 90%;
    max-height: 90%;
}
a {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* If you want the link to span the width */
  text-align: center; /* Example: center the text within the <a> */
  /* ... other link styles ... */
}
//I'm using this awesome Css Gradient Pattern from Lea Verou's Gallery: http://lea.verou.me/css3patterns/#hearts

