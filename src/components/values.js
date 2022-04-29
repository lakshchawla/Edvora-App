"use strict";

var Values = [
  {
    id: 324,
    origin_station_code: 12,
    station_path: [59, 64, 73, 82],
    destination_station_code: 96,
    date: "02/04/2022 01:47 PM",
    map_url: "https://picsum.photos/200",
    state: "Odisha",
    city: "Rayagada",
  },
  {
    id: 268,
    origin_station_code: 13,
    station_path: [32, 45, 54, 61, 72, 82],
    destination_station_code: 93,
    date: "02/12/2022 11:04 AM",
    map_url: "https://picsum.photos/200",
    state: "Arunachal Pradesh",
    city: "Naharlagun",
  },
  {
    id: 199,
    origin_station_code: 17,
    station_path: [33, 41, 55, 69, 70, 87],
    destination_station_code: 97,
    date: "03/06/2022 02:32 AM",
    map_url: "https://picsum.photos/200",
    state: "Uttarakhand",
    city: "Dehradun",
  },
  {
    id: 930,
    origin_station_code: 1,
    station_path: [21, 32, 46, 55, 60, 72, 84],
    destination_station_code: 94,
    date: "03/16/2022 06:43 PM",
    map_url: "https://picsum.photos/200",
    state: "Maharashtra",
    city: "Shrirampur",
  },
  {
    id: 866,
    origin_station_code: 18,
    station_path: [60, 70, 80],
    destination_station_code: 90,
    date: "03/03/2022 01:43 PM",
    map_url: "https://picsum.photos/200",
    state: "Madhya Pradesh",
    city: "Itarsi",
  },
  {
    id: 933,
    origin_station_code: 11,
    station_path: [32, 40, 52, 62, 71, 84],
    destination_station_code: 99,
    date: "03/29/2022 03:08 AM",
    map_url: "https://picsum.photos/200",
    state: "Arunachal Pradesh",
    city: "Naharlagun",
  },
  {
    id: 628,
    origin_station_code: 9,
    station_path: [64, 78, 81],
    destination_station_code: 98,
    date: "02/13/2022 07:27 PM",
    map_url: "https://picsum.photos/200",
    state: "Arunachal Pradesh",
    city: "Naharlagun",
  },
  {
    id: 980,
    origin_station_code: 5,
    station_path: [35, 43, 56, 61, 79, 84],
    destination_station_code: 92,
    date: "02/09/2022 08:23 AM",
    map_url: "https://picsum.photos/200",
    state: "Chandigarh",
    city: "Chandigarh",
  },
  {
    id: 432,
    origin_station_code: 9,
    station_path: [29, 32, 48, 56, 66, 77, 87],
    destination_station_code: 96,
    date: "03/09/2022 04:55 PM",
    map_url: "https://picsum.photos/200",
    state: "Tripura",
    city: "Pratapgarh",
  },
  {
    id: 185,
    origin_station_code: 9,
    station_path: [47, 52, 65, 73, 83],
    destination_station_code: 92,
    date: "02/28/2022 11:44 AM",
    map_url: "https://picsum.photos/200",
    state: "Rajasthan",
    city: "Jaipur",
  },
  {
    id: 834,
    origin_station_code: 15,
    station_path: [47, 53, 60, 73, 80],
    destination_station_code: 90,
    date: "03/16/2022 04:43 PM",
    map_url: "https://picsum.photos/200",
    state: "Himachal Pradesh",
    city: "Shimla",
  },
  {
    id: 551,
    origin_station_code: 9,
    station_path: [41, 52, 64, 76, 86],
    destination_station_code: 96,
    date: "02/20/2022 08:04 AM",
    map_url: "https://picsum.photos/200",
    state: "Andaman and Nicobar Islands",
    city: "Port Blair",
  },
  {
    id: 717,
    origin_station_code: 4,
    station_path: [40, 53, 60, 75, 87],
    destination_station_code: 90,
    date: "03/07/2022 12:28 AM",
    map_url: "https://picsum.photos/200",
    state: "Nagaland",
    city: "Zunheboto",
  },
  {
    id: 321,
    origin_station_code: 19,
    station_path: [41, 54, 63, 74, 86],
    destination_station_code: 95,
    date: "03/27/2022 06:51 AM",
    map_url: "https://picsum.photos/200",
    state: "Dadra and Nagar Haveli",
    city: "Silvassa",
  },
  {
    id: 820,
    origin_station_code: 4,
    station_path: [53, 63, 74, 87],
    destination_station_code: 99,
    date: "04/02/2022 01:41 PM",
    map_url: "https://picsum.photos/200",
    state: "Jammu and Kashmir",
    city: "Udhampur",
  },
  {
    id: 607,
    origin_station_code: 8,
    station_path: [43, 51, 69, 73, 86],
    destination_station_code: 98,
    date: "02/07/2022 09:38 AM",
    map_url: "https://picsum.photos/200",
    state: "Arunachal Pradesh",
    city: "Naharlagun",
  },
  {
    id: 345,
    origin_station_code: 4,
    station_path: [34, 47, 51, 63, 78, 83],
    destination_station_code: 92,
    date: "03/26/2022 06:55 AM",
    map_url: "https://picsum.photos/200",
    state: "Himachal Pradesh",
    city: "Nahan",
  },
  {
    id: 593,
    origin_station_code: 12,
    station_path: [49, 57, 65, 74, 83],
    destination_station_code: 94,
    date: "03/08/2022 08:20 PM",
    map_url: "https://picsum.photos/200",
    state: "Madhya Pradesh",
    city: "Multai",
  },
  {
    id: 141,
    origin_station_code: 15,
    station_path: [23, 37, 44, 59, 61, 71, 86],
    destination_station_code: 90,
    date: "03/31/2022 03:12 PM",
    map_url: "https://picsum.photos/200",
    state: "Andhra Pradesh",
    city: "Srisailam Project (Right Flank Colony) Township",
  },
  {
    id: 137,
    origin_station_code: 11,
    station_path: [61, 73, 82],
    destination_station_code: 94,
    date: "02/10/2022 05:57 PM",
    map_url: "https://picsum.photos/200",
    state: "Dadra and Nagar Haveli",
    city: "Silvassa",
  },
  {
    id: 451,
    origin_station_code: 14,
    station_path: [24, 34, 48, 54, 66, 76, 85],
    destination_station_code: 94,
    date: "03/07/2022 03:01 AM",
    map_url: "https://picsum.photos/200",
    state: "Goa",
    city: "Panaji",
  },
  {
    id: 854,
    origin_station_code: 8,
    station_path: [39, 49, 55, 68, 71, 82],
    destination_station_code: 92,
    date: "03/12/2022 07:59 AM",
    map_url: "https://picsum.photos/200",
    state: "West Bengal",
    city: "Mathabhanga",
  },
  {
    id: 199,
    origin_station_code: 13,
    station_path: [49, 54, 60, 76, 88],
    destination_station_code: 93,
    date: "02/12/2022 12:03 AM",
    map_url: "https://picsum.photos/200",
    state: "Chhattisgarh",
    city: "Durg",
  },
  {
    id: 423,
    origin_station_code: 12,
    station_path: [56, 63, 74, 80],
    destination_station_code: 93,
    date: "03/05/2022 03:13 AM",
    map_url: "https://picsum.photos/200",
    state: "Madhya Pradesh",
    city: "Neemuch",
  },
  {
    id: 791,
    origin_station_code: 11,
    station_path: [20, 37, 42, 56, 62, 74, 89],
    destination_station_code: 96,
    date: "03/17/2022 06:44 PM",
    map_url: "https://picsum.photos/200",
    state: "Goa",
    city: "Marmagao",
  },
  {
    id: 493,
    origin_station_code: 9,
    station_path: [60, 74, 89],
    destination_station_code: 92,
    date: "03/23/2022 08:35 AM",
    map_url: "https://picsum.photos/200",
    state: "Nagaland",
    city: "Wokha",
  },
  {
    id: 294,
    origin_station_code: 2,
    station_path: [63, 75, 81],
    destination_station_code: 90,
    date: "03/03/2022 05:40 AM",
    map_url: "https://picsum.photos/200",
    state: "Arunachal Pradesh",
    city: "Naharlagun",
  },
  {
    id: 772,
    origin_station_code: 7,
    station_path: [32, 41, 51, 69, 74, 80],
    destination_station_code: 96,
    date: "02/27/2022 07:20 AM",
    map_url: "https://picsum.photos/200",
    state: "Tamil Nadu",
    city: "Virudhachalam",
  },
  {
    id: 664,
    origin_station_code: 1,
    station_path: [35, 41, 59, 62, 72, 86],
    destination_station_code: 91,
    date: "03/11/2022 03:19 PM",
    map_url: "https://picsum.photos/200",
    state: "Maharashtra",
    city: "Pachora",
  },
  {
    id: 847,
    origin_station_code: 3,
    station_path: [44, 52, 66, 78, 83],
    destination_station_code: 97,
    date: "02/18/2022 05:37 PM",
    map_url: "https://picsum.photos/200",
    state: "Haryana",
    city: "Narwana",
  },
  {
    id: 587,
    origin_station_code: 3,
    station_path: [68, 77, 84],
    destination_station_code: 95,
    date: "03/14/2022 07:01 PM",
    map_url: "https://picsum.photos/200",
    state: "Himachal Pradesh",
    city: "Palampur",
  },
  {
    id: 204,
    origin_station_code: 8,
    station_path: [50, 66, 74, 83],
    destination_station_code: 99,
    date: "02/05/2022 11:21 AM",
    map_url: "https://picsum.photos/200",
    state: "Assam",
    city: "Barpeta",
  },
  {
    id: 282,
    origin_station_code: 4,
    station_path: [51, 65, 72, 87],
    destination_station_code: 96,
    date: "02/09/2022 10:41 AM",
    map_url: "https://picsum.photos/200",
    state: "Haryana",
    city: "Mahendragarh",
  },
  {
    id: 580,
    origin_station_code: 9,
    station_path: [22, 35, 45, 52, 63, 76, 81],
    destination_station_code: 90,
    date: "03/27/2022 11:54 AM",
    map_url: "https://picsum.photos/200",
    state: "Uttarakhand",
    city: "Pithoragarh",
  },
  {
    id: 264,
    origin_station_code: 1,
    station_path: [24, 36, 40, 57, 60, 71, 85],
    destination_station_code: 98,
    date: "02/25/2022 12:55 AM",
    map_url: "https://picsum.photos/200",
    state: "Uttarakhand",
    city: "Sitarganj",
  },
  {
    id: 285,
    origin_station_code: 14,
    station_path: [26, 32, 40, 55, 65, 77, 80],
    destination_station_code: 93,
    date: "03/13/2022 04:45 PM",
    map_url: "https://picsum.photos/200",
    state: "Puducherry",
    city: "Mahe",
  },
  {
    id: 804,
    origin_station_code: 11,
    station_path: [38, 46, 58, 63, 74, 80],
    destination_station_code: 98,
    date: "02/25/2022 03:02 PM",
    map_url: "https://picsum.photos/200",
    state: "Madhya Pradesh",
    city: "Sarni",
  },
  {
    id: 398,
    origin_station_code: 9,
    station_path: [60, 76, 80],
    destination_station_code: 92,
    date: "02/28/2022 07:45 PM",
    map_url: "https://picsum.photos/200",
    state: "Tripura",
    city: "Belonia",
  },
  {
    id: 303,
    origin_station_code: 6,
    station_path: [51, 67, 79, 87],
    destination_station_code: 92,
    date: "02/12/2022 02:19 AM",
    map_url: "https://picsum.photos/200",
    state: "Tamil Nadu",
    city: "Virudhachalam",
  },
  {
    id: 541,
    origin_station_code: 1,
    station_path: [57, 64, 72, 87],
    destination_station_code: 92,
    date: "03/04/2022 04:48 AM",
    map_url: "https://picsum.photos/200",
    state: "Puducherry",
    city: "Pondicherry",
  },
  {
    id: 478,
    origin_station_code: 16,
    station_path: [64, 72, 81],
    destination_station_code: 93,
    date: "02/19/2022 12:11 PM",
    map_url: "https://picsum.photos/200",
    state: "Goa",
    city: "Mapusa",
  },
  {
    id: 345,
    origin_station_code: 11,
    station_path: [27, 32, 46, 56, 62, 73, 83],
    destination_station_code: 90,
    date: "03/15/2022 07:37 AM",
    map_url: "https://picsum.photos/200",
    state: "Andaman and Nicobar Islands",
    city: "Port Blair",
  },
  {
    id: 711,
    origin_station_code: 17,
    station_path: [38, 44, 57, 69, 73, 86],
    destination_station_code: 90,
    date: "04/02/2022 01:10 AM",
    map_url: "https://picsum.photos/200",
    state: "Tripura",
    city: "Agartala",
  },
  {
    id: 676,
    origin_station_code: 6,
    station_path: [51, 61, 73, 82],
    destination_station_code: 90,
    date: "03/01/2022 09:48 PM",
    map_url: "https://picsum.photos/200",
    state: "Odisha",
    city: "Bargarh",
  },
  {
    id: 714,
    origin_station_code: 7,
    station_path: [25, 39, 41, 50, 68, 73, 83],
    destination_station_code: 99,
    date: "02/16/2022 08:34 AM",
    map_url: "https://picsum.photos/200",
    state: "Chandigarh",
    city: "Chandigarh",
  },
  {
    id: 673,
    origin_station_code: 11,
    station_path: [32, 41, 59, 68, 78, 87],
    destination_station_code: 96,
    date: "03/28/2022 05:44 PM",
    map_url: "https://picsum.photos/200",
    state: "Uttarakhand",
    city: "Sitarganj",
  },
  {
    id: 712,
    origin_station_code: 14,
    station_path: [25, 30, 47, 55, 66, 77, 80],
    destination_station_code: 98,
    date: "02/15/2022 12:15 PM",
    map_url: "https://picsum.photos/200",
    state: "Jammu and Kashmir",
    city: "Udhampur",
  },
  {
    id: 273,
    origin_station_code: 1,
    station_path: [42, 58, 60, 76, 80],
    destination_station_code: 95,
    date: "03/12/2022 02:56 AM",
    map_url: "https://picsum.photos/200",
    state: "Odisha",
    city: "Barbil",
  },
  {
    id: 498,
    origin_station_code: 1,
    station_path: [20, 39, 45, 57, 68, 76, 85],
    destination_station_code: 95,
    date: "03/22/2022 07:19 PM",
    map_url: "https://picsum.photos/200",
    state: "Himachal Pradesh",
    city: "Shimla",
  },
];

export default Values;