import moment from "moment";
import axios from "axios";

// export function verifyIsLoggedIn(router) {
//   const token = localStorage.getItem("Etoken");
//   if (token) {
//   } else {
//     router.push("/");
//   }
// }
export const getFormatedDate = (date, format = "") => {
    if (format != "") {
        return moment(date).format(format);
    }

    if (typeof date?.getMonth === "function") {
        return moment(date).format("L");
    }

    if (date == undefined) {
        return moment().format("L");
    }

    if (typeof date === "string") {
        return moment(date).format("L");
    }
};


// export async function verifyToken() {

//     const token = localStorage.getItem("token");
//     try {
//       const data = await fetch(process.env.SITE_URL + "verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//       });
//       const result = await data.json();
//       return result;
//     } catch (err) {
//       return err;
//     }
//   }


//function for get


export async function getData(route) {
    try {
        const data = await axios.get(process.env.NEXT_PUBLIC_SITE_URL + route);
        return data
    } catch (err) {
        return err;
    }
}


//function for post
export async function postData(route, postObject) {
    try {
        const data = await axios.post(process.env.NEXT_PUBLIC_SITE_URL + route, postObject)
        return data;
    } catch (err) {
        return err;
    }
}

//function for put
export async function putData(route, putObject) {
    // const token = localStorage.getItem("token");
    try {
        const data = await axios.put(process.env.NEXT_PUBLIC_SITE_URL + route, putObject);
        // const result = await data.json();
        return data;
    } catch (err) {
        return err;
    }
}

//function for delete
export async function deleteData(route, deleteObject) {
    // const token = localStorage.getItem("token");
    try {
        // const data = await fetch(process.env.NEXT_PUBLIC_SITE_URL + route, {
        //     method: "DELETE",
        //     headers: {
        //         "Content-Type": "application/json",
        //         // Authorization: token,
        //     },
        //     body: JSON.stringify(deleteObject),
        // });
        // const result = await data.json();
        const result = await axios.post(process.env.NEXT_PUBLIC_SITE_URL + route, deleteObject)

        return result;
    } catch (err) {
        return err;
    }
}
