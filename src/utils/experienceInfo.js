const PRESENT_LABEL = "Present";

const parseMonthYear = (dateString) => {
  if (!dateString || typeof dateString !== "string") return null;

  if (dateString.trim().toLowerCase() === PRESENT_LABEL.toLowerCase()) {
    const current = new Date();
    return new Date(current.getFullYear(), current.getMonth(), 1);
  }

  const [month, year] = dateString.split(" ");
  if (!month || !year) return null;

  const parsed = new Date(`${month} 1, ${year}`);
  if (Number.isNaN(parsed.getTime())) return null;

  return new Date(parsed.getFullYear(), parsed.getMonth(), 1);
};

const getDurationInMonths = (fromDateStr, toDateStr) => {
  const fromDate = parseMonthYear(fromDateStr);
  const toDate = parseMonthYear(toDateStr);

  if (!fromDate || !toDate || toDate < fromDate) return 0;

  return (
    (toDate.getFullYear() - fromDate.getFullYear()) * 12 +
    (toDate.getMonth() - fromDate.getMonth()) +
    1
  );
};

const formatMonths = (totalMonths) => {
  if (totalMonths <= 0) return "0mos";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) return `${years}y ${months}mos`;
  if (years > 0) return `${years}y`;

  return `${months}mos`;
};

export const getDesignationDuration = ({ designationDurationFromDate, designationDurationEndDate }) => {
  const durationMonths = getDurationInMonths(designationDurationFromDate, designationDurationEndDate);
  return formatMonths(durationMonths);
};

export const getExperienceTotal = ({ designation }) => {
  if (!Array.isArray(designation) || designation.length === 0) return "Full-time 0mos";

  const totalMonths = designation.reduce(
    (sum, { designationDurationFromDate, designationDurationEndDate }) =>
      sum + getDurationInMonths(designationDurationFromDate, designationDurationEndDate),
    0
  );

  return `Full-time ${formatMonths(totalMonths)}`;
};

export const experience = [
  // {
  //   companyUrl: "https://www.renderinfotech.com/",
  //   companyLogo: "render-infotech-logo",
  //   companyName: "RenderInfotech",
  //   designation: [
  //     {
  //       designationTitle: "Software Developer",
  //       designationDurationFromDate: "Sep 2021",
  //       designationDurationEndDate: "Mar 2023",
  //       designationDuration: "1y 7mos",
  //       officeLocation: "Bel-Circle Bangalore",
  //       officeWorkSystem: "",
  //     },
  //   ],
  // },
  {
    companyUrl: "https://signanthealth.com/",
    companyLogo: "signant-health-logo",
    companyName: "SigantHealth",
    designation: [
      {
        designationTitle: "SDE - 1",
        designationDurationFromDate: "Apr 2024",
        designationDurationEndDate: "Feb 2025",
        officeLocation: "Whitefield Bangalore",
        officeWorkSystem: "Hybrid",
      },
      {
        designationTitle: "UI Developer",
        designationDurationFromDate: "Mar 2023",
        designationDurationEndDate: "Apr 2024",
        officeLocation: "Whitefield Bangalore",
        officeWorkSystem: "Hybrid",
      },
    ],
  },
  {
    companyUrl: "https://www.ibm.com/in-en",
    companyLogo: "ibm-logo",
    companyName: "IBM",
    designation: [
      {
        designationTitle: "Software Developer",
        designationDurationFromDate: "Oct 2025",
        designationDurationEndDate: "Present",
        officeLocation: "BCIT Bangalore",
        officeWorkSystem: "Hybrid",
      },
    ],
  },
];
