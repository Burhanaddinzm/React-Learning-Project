import { Helmet } from "react-helmet-async";
import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <Helmet>
        <title>Browse Jobs</title>
      </Helmet>
      <JobListings />
    </section>
  );
};

export default JobsPage;
