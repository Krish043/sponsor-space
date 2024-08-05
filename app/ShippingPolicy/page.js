import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="m-12 p-8 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-slate-400 mb-6">Shipping Policy</h1>
      
      <p className="text-white mb-4">Welcome to SponsorSpace&apos;s Shipping Policy!</p>
      <p className="text-white mb-6">
        This Shipping Policy applies to any physical products or merchandise offered on our platform. Please read the following information carefully to understand our policies regarding shipping and delivery.
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">1. Order Processing</h2>
      <p className="text-white mb-6">
        All orders are processed within 2-3 business days. Orders are not processed or shipped on weekends or holidays. You will receive a notification once your order has shipped.
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">2. Shipping Rates & Delivery Estimates</h2>
      <p className="text-white mb-6">
        Shipping charges for your order will be calculated and displayed at checkout. Delivery estimates are based on the shipping method you select and your location.
      </p>
      <ul className="list-disc list-inside text-white mb-6">
        <li><strong>Standard Shipping:</strong> Estimated delivery within 5-7 business days.</li>
        <li><strong>Expedited Shipping:</strong> Estimated delivery within 2-3 business days.</li>
        <li><strong>International Shipping:</strong> Estimated delivery times vary by destination.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">3. Shipping Methods</h2>
      <p className="text-white mb-6">
        We offer various shipping methods, including standard and expedited options. The available shipping methods will be displayed during checkout, and you can select the one that best suits your needs.
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">4. Shipment Confirmation & Order Tracking</h2>
      <p className="text-white mb-6">
        You will receive a shipment confirmation email once your order has shipped, containing your tracking number(s). The tracking number will be active within 24 hours.
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">5. Shipping Restrictions</h2>
      <p className="text-white mb-6">
        We currently ship to addresses within India. We do not ship to P.O. Boxes or military addresses (APO/FPO).
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">6. Customs, Duties, and Taxes</h2>
      <p className="text-white mb-6">
        SponsorSpace is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">7. Damages and Issues</h2>
      <p className="text-white mb-6">
        SponsorSpace is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">8. International Shipping Policy</h2>
      <p className="text-white mb-6">
        We currently do not ship outside India. Any changes to our international shipping policy will be updated here.
      </p>

      <h2 className="text-2xl font-semibold text-slate-400 mb-4">9. Contact Us</h2>
      <p className="text-white mb-6">
        If you have any questions or concerns about this Shipping Policy, please contact us at <a href="mailto:krisjchetangangajaliya@gmail.com" className="text-blue-400 underline">krisjchetangangajaliya@gmail.com</a>.
      </p>

      <p className="text-white">
        By making a purchase on our website, you agree to this Shipping Policy.
      </p>
    </div>
  );
}

export default ShippingPolicy;
