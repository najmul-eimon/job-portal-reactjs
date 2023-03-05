import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Newsletter from '../../components/shared/Newsletter';
import CompanyBanner from '../../components/singleCompany/CompanyBanner';
import CompanyDetails from '../../components/singleCompany/companyDetails/CompanyDetails';
import CompanyLocation from '../../components/singleCompany/CompanyLocation';
import {companies} from '../../data/company';

const SingleCompany = () => {
  useEffect(() => {
    document.title = "Job Portal | Company Details"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  const {companyId} = useParams();
  const [singleCompany, setSingleCompany] = useState({});

  useEffect(() => {
    setSingleCompany(companies.find((company) => company.id === companyId))
  }, [companyId]);

  return (
    <>
      <CompanyBanner singleCompany={singleCompany}/>
      <CompanyDetails singleCompany={singleCompany}/>
      <CompanyLocation/>
      <Newsletter/>
    </>
  )
}

export default SingleCompany;