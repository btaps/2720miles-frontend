const endPoint = "http://localhost:8080/api/products";
const updatePriceAndQuantity =
  "http://localhost:8080/api/products/price&quantity";

class ProductsModel {
  static all = () => {
    return fetch(endPoint)
      .then(res => res.json())
      .catch(err => console.log("Could not get all products using fetch", err));
  };

  static getOne = id => {
    return fetch(`${endPoint}/${id}`)
      .then(res => res.json())
      .catch(err =>
        console.log(`Couldn't retrive products with product_cat_id ${id}`)
      );
  };

  static create = product => {
    return fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => {
        res.json();
        console.log(res);
      })
      .catch(err => console.log("Could not insert Product", err));
  };

  static delete = id => {
    return fetch(`${endPoint}/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(err => console.log("Could not delete Product", err));
  };

  static update = product => {
    return fetch(`${updatePriceAndQuantity}/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => {
        console.log("MODEL");
        return res.json();
      })
      .catch(err => console.log("Could not update product", err));
  };
}
export default ProductsModel;
