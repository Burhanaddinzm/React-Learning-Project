import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>React Jobs</title>
      </Helmet>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </Fragment>
  );
};

export default HomePage;
