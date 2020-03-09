import React, { Component } from "react";
import axios from "axios";
import "./AWS-Upload.css";
import ProductsModel from "../../models/ProductsModel";

class Home extends Component {
  state = {
    selectedFile: null,
    selectedFiles: null,
    pCategoryID: null,
    pName: "",
    pPrice: "",
    pDescription: "",
    pSize: "",
    pImage: "",
    pQuantity: ""
  };

  singleFileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  multipleFileChangedHandler = event => {
    this.setState({
      selectedFiles: event.target.files
    });
    console.log(event.target.files);
  };

  singleFileUploadHandler = event => {
    const data = new FormData(); // If file selected
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      //fetch("http://localhost:8080/api/profile/profile-img-upload", {
      //method: "POST",
      //headers: {
      //accept: "application/json",
      //"Accept-Language": "en-US,en;q=0.8",
      //"Content-Type": `multipart/form-data; boundary=${data._boundary}`
      //},
      //body: JSON.stringify(data)
      //})
      axios
        .post("http://localhost:8080/api/profile/profile-img-upload", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                //this.ocShowAlert("Max size: 2MB", "red");
                this.ocShowAlert2("Max size: 2MB", "alert");
              } else {
                console.log(response.data); // If not the given file type
                //this.ocShowAlert(response.data.error, "red");
                this.ocShowAlert2(response.data.error, "alert");
              }
            } else {
              // Success

              let fileName = response.data;
              console.log("fileName", fileName);
              this.setState({ pImage: fileName.image });
              //this.ocShowAlert("File Uploaded", "#3089cf");
              this.ocShowAlert2("File Uploaded", "success");
              let productObject = {
                product_cat_id: this.state.pCategoryID,
                name: this.state.pName,
                price: this.state.pPrice,
                description: this.state.pDescription,
                size: this.state.pSize,
                images: [this.state.pImage],
                quantity: this.state.pQuantity
              };
              console.log(productObject);
              // Send Image to database
              ProductsModel.create(productObject);
            }
          }
        })
        .catch(error => {
          // If another error
          //this.ocShowAlert(error, "red");
          this.ocShowAlert2(error, "alert");
        });
    } else {
      // if file not selected throw error
      //this.ocShowAlert("Please upload file", "red");
      this.ocShowAlert2("Please upload file", "moderate");
    }
  };

  // ShowAlert Function 2
  ocShowAlert2 = (message, background) => {
    let alertContainer = document.querySelector("#oc-alert-pop-up"),
      //alertEl = document.createElement("div"),
      textNode = document.createTextNode(message);
    //alertEl.setAttribute("class", "oc-alert-pop-up");
    alertContainer.appendChild(textNode);
    alertContainer.setAttribute("class", "show");
    //alertContainer.appendChild(alertEl);
    let alertPopUp =
      background === "alert"
        ? (alertContainer.style.background = "#ff0000")
        : background === "success"
        ? (alertContainer.style.background = "#99ccff")
        : background === "moderate"
        ? (alertContainer.style.background = "#ffff00")
        : "";
    setTimeout(function() {
      //$(alertEl).fadeOut("slow");
      //$(alertEl).remove();
      alertContainer.setAttribute("class", "hide");
      //alertContainer.removeAttribute("class", "show");
      //alertContainer.setAttribute("class", "hide");
    }, 3000);
    return alertPopUp;
  };

  updateState = e => {
    if (e.target.id === "name") this.setState({ pName: e.target.value });
    if (e.target.id === "price") this.setState({ pPrice: e.target.value });
    if (e.target.id === "description")
      this.setState({ pDescription: e.target.value });
    if (e.target.id === "size") this.setState({ pSize: e.target.value });
    if (e.target.id === "quantity")
      this.setState({ pQuantity: e.target.value });
    if (e.target.name === "categories") {
      if (e.target.value === "New") this.setState({ pCategoryID: 1 });
      else if (e.target.value === "Sales") this.setState({ pCategoryID: 2 });
      else if (e.target.value === "Accessories")
        this.setState({ pCategoryID: 3 });
      else if (e.target.value === "Clothing") this.setState({ pCategoryID: 4 });
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* For Alert box*/}
        <div className="hide" id="oc-alert-pop-up"></div>
        {/* Single File Upload*/}
        <div className="">
          <div className="">
            <h3>Single Image Upload</h3>
            <p className="">Upload Size: 250px x 250px ( Max 2MB )</p>
          </div>
          <div className="">
            <p className="">Please upload an image for your profile</p>
            <label>
              Choose a category:
              <input
                list="categories"
                name="categories"
                onChange={this.updateState}
              />
            </label>
            <datalist id="categories">
              <option value="New" />
              <option value="Sales" />
              <option value="Accessories" />
              <option value="Clothing" />
            </datalist>
            <br />
            <label for="name"> Product Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Handbag"
              onChange={this.updateState}
            />
            <br />
            <label for="price"> Price $:</label>
            <input
              type="text"
              id="price"
              placeholder="30.00"
              onChange={this.updateState}
            />
            <br />
            <label for="description"> Description:</label>
            <input
              onChange={this.updateState}
              type="text"
              id="description"
              placeholder="Little hand purse..."
            />
            <br />
            <label for="size"> Size:</label>
            <input
              type="text"
              id="size"
              placeholder="Small"
              onChange={this.updateState}
            />
            <br />
            <label for="quantity"> Quantity:</label>
            <input
              type="text"
              id="quantity"
              placeholder="1"
              onChange={this.updateState}
            />
            <br />
            <input type="file" onChange={this.singleFileChangedHandler} />
            <div className="">
              <button className="" onClick={this.singleFileUploadHandler}>
                Upload!
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
