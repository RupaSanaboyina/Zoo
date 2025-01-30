import React from "react";

const FeedbackCard = ({ profilePic, name, username, feedback, date, number }) => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white mb-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <img
          src={profilePic}
          alt={`Profile picture of ${name}`}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <p className="font-bold text-gray-800">
            {name} <span className="text-gray-500 font-normal">@{username}</span>
          </p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{feedback}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{date}</span>
        <span>#{number}</span>
      </div>
    </div>
  );
};

const FeedbackList = () => {
  const feedbackData = [
    {
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXu--WFtbSiwrAP4VlfNXV4myyv3l1B3y8bw&s",
      name: "Alex Dawson",
      username: "AlexDawsonUK",
      feedback:
        "You could also play with it and make it a bit more fun and friendly (depending on what kind of business you run), I’ve seen stuff like “Our fans”, “Listen to our customers”, “Are we liked?”, all you really need to do is express it in a positive light and state your clients / customers / users are giving out their two cents. 🙂",
      date: "November 2009",
      number: 5,
    },
   
    {
      profilePic: "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg",
      name: "edgetelephone",
      username: "SitePoint Member",
      feedback:
        "The team exceeded our expectations! They were attentive, professional, and ensured we were satisfied at every stage of the project. Highly recommended!",
      date: "March 2023",
      number: 34,
    },

    {
      profilePic: "https://superlawyer.in/wp-content/uploads/2023/10/Raghav-DP-2-croped.jpg",
      name: "John Smith",
      username: "JohnSmith99",
      feedback:
        "Great experience working with your company. The support was excellent, and the results speak for themselves. Keep up the fantastic work!",
      date: "February 2023",
      number: 23,
    },
    {
      profilePic: "https://trueclientpro.com/wp-content/uploads/2022/12/Mayuri-Parikh-True-Client-Pro.jpg",
      name: "M_wb360",
      username: "SitePoint Enthusiast",
      feedback:
        "Impeccable service and timely delivery! Your attention to detail and willingness to accommodate our requests made this a seamless experience.",
      date: "March 2024",
      number: 21,
    },
    {
      profilePic: "/t.jpeg",
      name: "Alex Dawson",
      username: "AlexDawsonUK",
      feedback:
        " We received our work on time, and our tarot card website was created beautifully. That's why I enjoy working with Zoomster Hub.",
      date: "November 2009",
      number: 5,
    },
    {
      profilePic: "https://thumbs.dreamstime.com/b/new-client-14173583.jpg",
      name: "Jane Doe",
      username: "JaneDoe123",
      feedback:
        "Amazing service! The team was incredibly professional and delivered beyond expectations. I would highly recommend them to anyone seeking top-notch IT solutions!",
      date: "January 2021",
      number: 12,
    },
  ];

  return (
    <div className="pt-6 bg-[#0C1A2A] p-6">
      <h1 className="text-3xl text-center text-white">What users say about Zoomster Hub!</h1>
      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbackData.map((item, index) => (
          <FeedbackCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
