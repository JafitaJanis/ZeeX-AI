import Hero from "../components/Hero";
import BlogGrid from "../components/BlogGrid";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function BlogsPage() {
  return (
    <>
      <Hero />

      <section className="blogs">
        <h2 className="blogs-title">Latest Insights</h2>
        <BlogGrid />
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}