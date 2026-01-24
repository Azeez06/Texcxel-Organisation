export const payWithPaystack = ({
  email,
  amount,
  reference,
  onSuccess,
  onClose,
}) => {
  if (!window.PaystackPop) {
    alert("Paystack script not loaded");
    return;
  }

  const handler = window.PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // ✅ ENV key
    email,
    amount: amount * 100, // kobo
    ref: reference,
    callback: function (response) {
      onSuccess(response.reference);
    },
    onClose: function () {
      onClose();
    },
  });

  handler.openIframe();
};
