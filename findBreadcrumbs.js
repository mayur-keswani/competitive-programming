// Code SandBox Link : _https://codesandbox.io/s/recursion-findbreadcrumb-jdu9e_

const categories = {
  mobiles: {
    samsung: ["Samsung A series", "Samsung M series"]
  },
  headphones: {
    tws: {
      dizo: [],
      boat: ["Boat 200 series", "Boat 300 series"],
      noice: []
    }
  }
};

const findBreadcrumbs = (object, value, parent) => {
  // console.log(parent)
  let breadcrumbs = [];

  for (let key in object) {
    if (key === value) {
      breadcrumbs.push(key);
      return;
    }
    if (typeof object[key] === "object") {
      if (Array.isArray(object[key])) {
        let index = object[key].findIndex((item) => item === value);
        if (index >= 0) {
          breadcrumbs = [...parent];
          breadcrumbs.push(key);
        }
      } else {
        breadcrumbs = findBreadcrumbs(object[key], value, [...parent, key]);
        if (breadcrumbs.length > 0) {
          break;
        }
      }
    }
  }

  return breadcrumbs;
};

console.log(findBreadcrumbs(categories, "Boat 300 series", ["categories"]));
