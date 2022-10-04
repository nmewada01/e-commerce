// const checkFormEmpty = (firstName,
//     lastName,
//     addressLine1,
//     locality,
//     pinCode,
//     state,
//     country,
//     email,
//     mobile) => {
//     if (
//       !firstName ||
//       !lastName ||
//       !addressLine1 ||
//       !locality ||
//       !pinCode ||
//       !state ||
//       !country ||
//       !email ||
//       !mobile
//     ) {
//       return { status: false, message: "Please fill the mandatory details" };
//     }
//     return { status: true };
//   };
//   console.log(checkFormEmpty("naresh","rajput","patelpura","patelpura","sehore","466001","mp","india","nareshmewada014@gmail.com",9617732664))

//   const checkMobile = (num) => {
//     if (num.length !== 10) {
//       return {
//         status: false,
//         message: "Please provide 10 digit valid mobile number",
//       };
//     }
//     return { status: true };
//   };
//   console.log(checkMobile(9874561235))
//   const checkPinCode = (num) => {
//     if (num.length !== 6) {
//       return { status: false, message: "Please provide 6 digit valid pincode" };
//     }
//     return { status: true };
//   };
//   console.log(checkPinCode(466001))
//   const checkEmail = (email) => {
//     const emailRegex = /\S+@\S+\.\S+/;
//     if (!emailRegex.test(email)) {
//       return { status: false, message: "Please provide a valid email id" };
//     }
//     return { status: true };
//   };
//   console.log(checkEmail("nareshmewada@gmail.com"))
//   const checkPassword = (password) => {
//     const errors = [];
//     if (password.length < 6) {
//       errors.push("at least 6 characters");
//     }
//     if (password.length > 16) {
//       errors.push("not more than 16 characters");
//     }
//     if (password.search(/[a-z]/i) < 0) {
//       errors.push("at least one lower case");
//     }
//     if (password.search(/[A-Z]/i) < 0) {
//       errors.push("at least one upper case");
//     }
//     if (password.search(/[0-9]/) < 0) {
//       errors.push("at least one number");
//     }
//     if (password.search(/[!@#$%^&*]/) < 0) {
//       errors.push("at least one special character(! @ # $ % ^ & *)");
//     }
//     if (errors.length > 0) {
//       return { status: false, message: errors.join(", ") };
//     }
//     return { status: true };
//   };
//   console.log(checkPassword("Jyoti#123*"))
//   const checkSignupForm = (
//     name,
//     username,
//     email,
//     password,
//     mobile,
//   ) => {
//     console.log(name, username, email, password, mobile);
//     if (!name || !username || !email || !password || !mobile) {
//       return { status: false, message: "Please fill all the details" };
//     } else {
//       return { status: true };
//     }
//   };
//   console.log(checkSignupForm("Naresh","naresh01","naresh@gmail.com","Jyoti#123*",9617732664))

//   const checkLoginForm = ( email, password) => {
//     if (!email || !password) {
//       return { status: false, message: "Please fill all the details" };
//     }
//     return { status: true };
//   };
//   console.log(checkLoginForm("naresh@gmail.com","Jyoti#123*"))

// const checkCharacter = (str) => {
//    console.log(str[0].toUpperCase())
//     if (str[0] !== str[0].toUpperCase()) {
//       return { status: false, message: "First latter should be Capital" };
//     }
//     return { status: true };
//   };
//   console.log(checkCharacter("naresh"));

// let num = "4,826";
// num = num.split(",");
// console.log(num)
// let output = num.reduce((acc,cur)=>{
//     acc+=cur;
//     return acc;
// },[]);
// console.log(typeof Number(output))

// let sizes = ["small", "medium", "large"];

// let output = sizes.reduce((acc, cur) => {
//   cur = acc.splice(acc.indexOf("small"),1);
//   console.log(cur)
// }, "small");



    // const typeOutput = e.target.value;
    // let newSizes = [...theSizes];
    // if (theSizes.includes(typeOutput)) {
    //   newSizes.splice(newSizes.indexOf(typeOutput), 1);
    // } else {
    //   newSizes.push(typeOutput);
    // }
    // setTheSizes(newSizes);

  
//   console.log(check)