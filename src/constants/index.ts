export const placehol = [
  "Telangana",
  "Bombay",
  "Kerala",
  "Gujarat",
  "Hyderabad",
];

export let States = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
export const Options = {
  // plotOptions: {
  //   pie: {
  //     donut: {
  //       size: "65%",
  //     },
  //   },
  // },
  labels: ["ELEMENTERY", "HIGHSCHOOL", "TECHNICAL"],
  colors: ["#4287f5", "#39eaed", "#9e4ca8"],
  chart: {
    width: 380,
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "50%",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 0,
    height: 630,
  },
};
