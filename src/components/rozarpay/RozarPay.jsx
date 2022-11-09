import swal from "sweetalert";
import { clearItem } from "../../redux/CartReducer/action";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (
  amount,
  form,
  navigate,
  profileImg,
  dispatch
) => {
  const { firstname, lastname, email, mobile } = form;

  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  const options = {
    key: "rzp_test_GZ5gpKSKDoFi4K",
    amount: amount * 100,
    currency: "INR",
    name: "Sports-K",
    description: "Thank You for Purchase",
    image:
      "https://png.pngtree.com/png-vector/20210315/ourlarge/pngtree-k-logo-design-png-image_3055797.png",

    handler: function (response) {
      swal({
        title: "Payment Success!",
        text: "Click Yes to know your Payment ID",
        icon: "success",
        buttons: ["No", "Yes"],
      }).then((willDelete) => {
        if (willDelete) {
          swal(`Your Payment Id is : ${response.razorpay_payment_id}`, {}).then(
            () => {
              dispatch(clearItem());
              navigate("/");
            }
          );
        } else {
          swal("Thank You for Shopping!").then(() => navigate("/"));
        }
      });
    },
    prefill: {
      name: `${firstname} ${lastname}`,
      email: email,
      contact: mobile,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export { displayRazorpay };
