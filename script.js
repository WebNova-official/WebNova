const serviceData = {

  web: {
    label: "Website Development",
    packages: [
      { name: "Basic", price: "₹6,999", features: ["3–5 Sections", "Responsive Design", "WhatsApp Integration"] },
      { name: "Standard", price: "₹9,999", features: ["5–7 Pages", "Custom UI/UX", "Performance Optimization"] },
      { name: "Premium", price: "₹14,999", features: ["8–12 Pages", "Speed & Security", "Lead Capture Forms"] }
    ]
  },

  webapp: {
    label: "Web Application Development",
    packages: [
      { name: "Basic", price: "₹19,999", features: ["Simple Web App", "Admin Panel", "Database Integration"] },
      { name: "Standard", price: "₹39,999", features: ["Custom App", "Role-Based Access", "API Integration"] },
      { name: "Premium", price: "₹69,999", features: ["Advanced App", "Authentication System", "Security & Performance"] }
    ]
  },

  ecommerce: {
    label: "E-commerce Development",
    packages: [
      { name: "Basic", price: "₹9,999", features: ["Product Listing", "Responsive Store", "WhatsApp Orders"] },
      { name: "Standard", price: "₹15,999", features: ["Cart & Checkout", "Payment Gateway", "Order Management"] },
      { name: "Premium", price: "₹21,999", features: ["Inventory System", "Shipping Integration", "Admin Dashboard"] }
    ]
  },

  social: {
    label: "Social Media Handling",
    packages: [
      { name: "Basic", price: "₹4,999", features: ["8 Posts", "Captions & Hashtags", "Creative Design"] },
      { name: "Standard", price: "₹7,999", features: ["12 Posts + 4 Reels", "Profile Optimization", "Engagement Strategy"] },
      { name: "Premium", price: "₹12,999", features: ["20 Posts + 8 Reels", "Content Planning", "Growth Strategy"] }
    ]
  },

  branding: {
    label: "Logo & Brand Creation",
    packages: [
      { name: "Basic", price: "₹999", features: ["Logo Design", "1 Revision"] },
      { name: "Standard", price: "₹1,999", features: ["2 Concepts", "Color Palette", "Font Selection"] },
      { name: "Premium", price: "₹2,999", features: ["Complete Brand Kit", "Unlimited Revisions"] }
    ]
  },

  gbp: {
    label: "Google Business Profile",
    packages: [
      { name: "Basic", price: "₹1,999", features: ["Profile Setup", "Verification Support"] },
      { name: "Standard", price: "₹3,999", features: ["Profile Optimization", "Services & Description"] },
      { name: "Premium", price: "₹6,999", features: ["Local SEO", "Photos & Products", "Insights Setup"] }
    ]
  },

  bundles: {
    label: "Bundle Offers",
    packages: [
      {
        name: "Startup Bundle",
        price: "₹9,999",
        features: ["Website (Basic)", "Logo Design", "GBP Setup"]
      },
      {
        name: "Business Growth Bundle",
        price: "₹14,999",
        features: ["Website (Standard)", "Branding", "GBP Optimization"]
      },
      {
        name: "Digital Presence Bundle",
        price: "₹19,999",
        features: ["Website (Premium)", "Full Branding", "GBP Premium"]
      },
      {
        name: "E-commerce Launch Bundle",
        price: "₹29,999",
        features: ["E-commerce Website", "Logo Design", "GBP Setup"]
      }
    ]
  }
};

function showCategory(cat, el) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if (el) el.classList.add("active");

  const grid = document.getElementById("service-grid");
  const service = serviceData[cat];

  grid.innerHTML = service.packages.map(pkg => `
    <div class="card">
      <small style="color:#8e2de2; font-weight:700">${service.label}</small>
      <h3>${pkg.name}</h3>
      <div class="price">${pkg.price}</div>

      <ul class="feature-list">
        ${pkg.features.map(f => `<li>${f}</li>`).join("")}
      </ul>

      <button class="btn-gradient" style="width:100%"
        onclick="openPopup('${service.label} – ${pkg.name}')">
        Enquire Now
      </button>
    </div>
  `).join("");
}

function openPopup(pkg) {
  document.getElementById("pkg-name").innerText = pkg;
  document.getElementById("contactModal").style.display = "flex";
}

function closePopup() {
  document.getElementById("contactModal").style.display = "none";
}

function sendWhatsApp(e) {
    e.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const msg = document.getElementById('custMsg').value.trim();
    const service = document.getElementById('pkg-name').innerText || "Free Consultation";

    if (!name || !phone) {
        alert("Please enter your name and phone number");
        return;
    }

    const text = 
`Hello WebNova 👋

I am interested in *${service}*.

Name: ${name}
Phone: ${phone}
Requirement: ${msg || "Not specified"}

Please connect with me.`;

    const whatsappNumber = "917378490883"; // primary number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}


window.onload = () => showCategory("web", document.querySelector(".tab.active"));
