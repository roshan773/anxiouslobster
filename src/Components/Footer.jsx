// components/Footer.jsx
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light text-muted py-5 w-100">
      <div className="container">
        <div className="row gy-4">
          {/* Column 1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <h6 className="fw-bold">Shop and Learn</h6>
            <ul className="list-unstyled">
              {["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
            <h6 className="fw-bold mt-4">Apple Wallet</h6>
            <ul className="list-unstyled">
              {["Wallet", "Apple Card", "Apple Pay", "Apple Cash"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              {["Manage Your Apple Account", "Apple Store Account", "iCloud.com"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
            <h6 className="fw-bold mt-4">Entertainment</h6>
            <ul className="list-unstyled">
              {["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <h6 className="fw-bold">Apple Store</h6>
            <ul className="list-unstyled">
              {["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals", "Order Status", "Shopping Help"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h6 className="fw-bold">For Business</h6>
            <ul className="list-unstyled">
              {["Apple and Business", "Shop for Business"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
            <h6 className="fw-bold mt-4">For Education</h6>
            <ul className="list-unstyled">
              {["Apple and Education", "Shop for K-12", "Shop for College"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
            <h6 className="fw-bold mt-4">For Healthcare</h6>
            <ul className="list-unstyled">
              {["Apple in Healthcare", "Mac in Healthcare", "Health on Apple Watch", "Health Records on iPhone and iPad"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
            <h6 className="fw-bold mt-4">For Government</h6>
            <ul className="list-unstyled">
              {["Shop for Government", "Shop for Veterans and Military"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h6 className="fw-bold">Apple Values</h6>
            <ul className="list-unstyled">
              {["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supply Chain"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
            <h6 className="fw-bold mt-4">About Apple</h6>
            <ul className="list-unstyled">
              {["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-reset text-decoration-none d-block py-1 small">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-5 pt-4 small">
          <p className="mb-2">
            More ways to shop:{" "}
            <Link href="#" className="text-primary">Find an Apple Store</Link> or{" "}
            <Link href="#" className="text-primary">other retailer</Link> near you.
            Or call <Link href="#" className="text-primary">1-800-MY-APPLE</Link>.
          </p>
          <hr />
          <div className="d-flex">
            <p className="mb-2">&copy; 2025 Apple Inc. All rights reserved.</p>
            <p className="mb-0">
              <Link href="#" className="text-reset text-decoration-none border-end ms-2 border-dark me-2 pe-2">Privacy Policy</Link>
              <Link href="#" className="text-reset text-decoration-none border-end ms-2 border-dark me-2 pe-2">Terms of Use</Link>
              <Link href="#" className="text-reset text-decoration-none border-end ms-2 border-dark me-2 pe-2">Sales and Refunds</Link>
              <Link href="#" className="text-reset text-decoration-none border-end ms-2 border-dark me-2 pe-2">Legal</Link>
              <Link href="#" className="text-reset text-decoration-none">Site Map</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
