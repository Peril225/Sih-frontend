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

export const StatesXcolor = [
  { State: "an", Color: ["255", "26", "26"] },
  { State: "ap", Color: ["255", "26", "26"] },
  { State: "ar", Color: ["255", "26", "26"] },
  { State: "as", Color: ["255", "26", "26"] },
  { State: "br", Color: ["255", "26", "26"] },
  { State: "ch", Color: ["255", "26", "26"] },
  { State: "ct", Color: ["255", "26", "26"] },
  { State: "dn", Color: ["255", "26", "26"] },
  { State: "dd", Color: ["255", "26", "26"] },
  { State: "dl", Color: ["255", "26", "26"] },
  { State: "ga", Color: ["255", "26", "26"] },
  { State: "gj", Color: ["255", "26", "26"] },
  { State: "hr", Color: ["255", "26", "26"] },
  { State: "hp", Color: ["255", "26", "26"] },
  { State: "jk", Color: ["255", "26", "26"] },
  { State: "jh", Color: ["255", "26", "26"] },
  { State: "ka", Color: ["255", "26", "26"] },
  { State: "kl", Color: ["255", "26", "26"] },
  { State: "ld", Color: ["255", "26", "26"] },
  { State: "mp", Color: ["255", "26", "26"] },
  { State: "mh", Color: ["255", "26", "26"] },
  { State: "mn", Color: ["255", "26", "26"] },
  { State: "ml", Color: ["255", "26", "26"] },
  { State: "mz", Color: ["255", "26", "26"] },
  { State: "nl", Color: ["255", "26", "26"] },
  { State: "or", Color: ["255", "26", "26"] },
  { State: "py", Color: ["255", "26", "26"] },
  { State: "pb", Color: ["255", "26", "26"] },
  { State: "rj", Color: ["255", "26", "26"] },
  { State: "sk", Color: ["255", "26", "26"] },
  { State: "tn", Color: ["255", "26", "26"] },
  { State: "tg", Color: ["255", "26", "26"] },
  { State: "tr", Color: ["255", "26", "26"] },
  { State: "up", Color: ["255", "26", "26"] },
  { State: "ut", Color: ["255", "26", "26"] },
  { State: "wb", Color: ["255", "26", "26"] },
];

export const DropOut = [
  { year: 2000, BOYS: 5, GIRLS: 16, Total: 10 },
  { year: 2001, BOYS: 7, GIRLS: 6, Total: 6 },
  { year: 2002, BOYS: 6, GIRLS: 13, Total: 9 },
  { year: 2003, BOYS: 17, GIRLS: 8, Total: 12 },
  { year: 2004, BOYS: 20, GIRLS: 8, Total: 14 },
  { year: 2005, BOYS: 14, GIRLS: 13, Total: 13 },
  { year: 2006, BOYS: 9, GIRLS: 5, Total: 7 },
  { year: 2007, BOYS: 20, GIRLS: 19, Total: 19 },
  { year: 2008, BOYS: 13, GIRLS: 11, Total: 12 },
  { year: 2009, BOYS: 7, GIRLS: 20, Total: 13 },
  { year: 2010, BOYS: 16, GIRLS: 6, Total: 11 },
  { year: 2011, BOYS: 16, GIRLS: 20, Total: 18 },
  { year: 2012, BOYS: 5, GIRLS: 15, Total: 10 },
  { year: 2013, BOYS: 14, GIRLS: 17, Total: 15 },
  { year: 2014, BOYS: 11, GIRLS: 18, Total: 14 },
  { year: 2015, BOYS: 13, GIRLS: 17, Total: 15 },
  { year: 2016, BOYS: 14, GIRLS: 19, Total: 16 },
  { year: 2017, BOYS: 10, GIRLS: 15, Total: 12 },
  { year: 2018, BOYS: 17, GIRLS: 17, Total: 17 },
  { year: 2019, BOYS: 17, GIRLS: 9, Total: 13 },
  { year: 2020, BOYS: 9, GIRLS: 10, Total: 9 },
  { year: 2021, BOYS: 6, GIRLS: 6, Total: 6 },
  { year: 2022, BOYS: 7, GIRLS: 19, Total: 13 },
];

export const LITracy = [
  { year: 2000, BOYS: 74, GIRLS: 69, Total: 71 },
  { year: 2001, BOYS: 58, GIRLS: 59, Total: 58 },
  { year: 2002, BOYS: 76, GIRLS: 61, Total: 68 },
  { year: 2003, BOYS: 75, GIRLS: 69, Total: 72 },
  { year: 2004, BOYS: 77, GIRLS: 65, Total: 71 },
  { year: 2005, BOYS: 62, GIRLS: 80, Total: 71 },
  { year: 2006, BOYS: 64, GIRLS: 65, Total: 64 },
  { year: 2007, BOYS: 70, GIRLS: 70, Total: 70 },
  { year: 2008, BOYS: 68, GIRLS: 83, Total: 75 },
  { year: 2009, BOYS: 66, GIRLS: 68, Total: 67 },
  { year: 2010, BOYS: 65, GIRLS: 69, Total: 67 },
  { year: 2011, BOYS: 84, GIRLS: 81, Total: 82 },
  { year: 2012, BOYS: 69, GIRLS: 77, Total: 73 },
  { year: 2013, BOYS: 71, GIRLS: 79, Total: 75 },
  { year: 2014, BOYS: 85, GIRLS: 80, Total: 82 },
  { year: 2015, BOYS: 89, GIRLS: 77, Total: 83 },
  { year: 2016, BOYS: 86, GIRLS: 73, Total: 79 },
  { year: 2017, BOYS: 81, GIRLS: 80, Total: 80 },
  { year: 2018, BOYS: 82, GIRLS: 91, Total: 86 },
  { year: 2019, BOYS: 79, GIRLS: 85, Total: 82 },
  { year: 2020, BOYS: 77, GIRLS: 81, Total: 79 },
  { year: 2021, BOYS: 81, GIRLS: 79, Total: 80 },
  { year: 2022, BOYS: 87, GIRLS: 81, Total: 84 },
];

export const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export const LITRACY = [
  { year: 2000, BOYS: 60, GIRLS: 77, Total: 68 },
  { year: 2001, BOYS: 85, GIRLS: 81, Total: 83 },
  { year: 2002, BOYS: 64, GIRLS: 87, Total: 75 },
  { year: 2003, BOYS: 67, GIRLS: 59, Total: 63 },
  { year: 2004, BOYS: 62, GIRLS: 86, Total: 74 },
  { year: 2005, BOYS: 82, GIRLS: 87, Total: 84 },
  { year: 2006, BOYS: 61, GIRLS: 90, Total: 75 },
  { year: 2007, BOYS: 70, GIRLS: 68, Total: 69 },
  { year: 2008, BOYS: 65, GIRLS: 77, Total: 71 },
  { year: 2009, BOYS: 83, GIRLS: 89, Total: 86 },
  { year: 2010, BOYS: 80, GIRLS: 88, Total: 84 },
  { year: 2011, BOYS: 73, GIRLS: 74, Total: 73 },
  { year: 2012, BOYS: 72, GIRLS: 84, Total: 78 },
  { year: 2013, BOYS: 80, GIRLS: 68, Total: 74 },
  { year: 2014, BOYS: 96, GIRLS: 96, Total: 96 },
  { year: 2015, BOYS: 82, GIRLS: 86, Total: 84 },
  { year: 2016, BOYS: 86, GIRLS: 82, Total: 84 },
  { year: 2017, BOYS: 74, GIRLS: 81, Total: 77 },
  { year: 2018, BOYS: 94, GIRLS: 89, Total: 91 },
  { year: 2019, BOYS: 92, GIRLS: 81, Total: 86 },
  { year: 2020, BOYS: 81, GIRLS: 96, Total: 88 },
  { year: 2021, BOYS: 87, GIRLS: 95, Total: 91 },
  { year: 2022, BOYS: 88, GIRLS: 92, Total: 90 },
];

export const TEACHERS = [
  { year: 2000, TEACHERS: 6 },
  { year: 2001, TEACHERS: 6 },
  { year: 2002, TEACHERS: 6 },
  { year: 2003, TEACHERS: 7 },
  { year: 2004, TEACHERS: 7 },
  { year: 2005, TEACHERS: 7 },
  { year: 2006, TEACHERS: 4 },
  { year: 2007, TEACHERS: 7 },
  { year: 2008, TEACHERS: 8 },
  { year: 2009, TEACHERS: 5 },
  { year: 2010, TEACHERS: 9 },
  { year: 2011, TEACHERS: 9 },
  { year: 2012, TEACHERS: 9 },
  { year: 2013, TEACHERS: 9 },
  { year: 2014, TEACHERS: 7 },
  { year: 2015, TEACHERS: 10 },
  { year: 2016, TEACHERS: 10 },
  { year: 2017, TEACHERS: 8 },
  { year: 2018, TEACHERS: 11 },
  { year: 2019, TEACHERS: 10 },
  { year: 2020, TEACHERS: 11 },
  { year: 2021, TEACHERS: 13 },
  { year: 2022, TEACHERS: 13 },
];