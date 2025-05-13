import React, { useState } from "react";
import SomethingPicture from "../images/writing-images/something-i-want-to-have.jpg";
import WriterMind from "../images/writing-images/writers-mind-works.jpg";
import DearSunset from "../images/writing-images/dear-sunset.jpg";
interface Education {
  school: string;
  degree: string;
  field: string;
  years: string;
  logo?: string;
}

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  logo?: string;
}

interface WrittenContent {
  id: number;
  title: string;
  preview: string;
  date: string;
  content: string;
  image?: string;
  stats: {
    views: number;
    comments: number;
    likes: number;
  };
}

const About: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<WrittenContent | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const education: Education[] = [
    {
      school: "STI College Marikina",
      degree: "Information and Communications Technologies",
      field: "",
      years: "2016-2018",
    },
    {
      school: "Pamantasan ng Lungsod ng Marikina",
      degree: "Bachelor of Science in Information Technologies",
      field: "",
      years: "2016-2018",
    },
  ];

  const workExperiences: WorkExperience[] = [
    {
      company: "Alorica",
      position: "Customer Service Representative",
      duration: "Jun 2021 - Nov 2021",
    },
    {
      company: "WordPress Developer",
      position: "Marketlink Web Solutions",
      duration: "Jan 2022 - June 2022",
    },
    {
      company: "Junior Software Developer",
      position: "Eurolink Network International Corporation",
      duration: "Sep 2022 - Apr 2023",
    },
    {
      company: "Application Developer",
      position: "International Container Terminal Services, Inc.",
      duration: "May 2023 - Present",
    },
  ];
  const writtenContent: WrittenContent[] = [
    {
      id: 1,
      title: "Something I want to have.",
      preview:
        "Ever since I was young, I barely had a chance to get whatever I want, but it doesn't matter as there's not that much things I desire to...",
      date: "Nov 21, 2020",
      content: `
         
          <p>Ever since I was young, I barely had a chance to get whatever I want, but it doesn't matter as there's not that much things I desire to have. Just so you know, I've never in my life became a materialist, not even once. Of course, I'll be grateful and feel indebted whenever I receive a present or something alike from someone.</p>
          <br>
          <p>Not going to lie, but I'm one of those kids who always anticipate the coming of BER-months. It's not because of the cool breeze that rarely blows as we're living in a tropical country, but because it's the season of giving, and I'm thrilled that I'll be receiving something from my family. Gifts such as <strong> shoes, shirts, watches, gaming console, or even money. </strong> Regardless of what I receive, I always felt content and thankful, but there's something I honestly want to have — it's <strong>sympathy.</strong></p>
          <br>
          <p>A word that we've all heard before. A word that's necessary for someone to be called human. A word constructed so beautifully it became so complicated. I lived my childhood with <strong> days full of deafening silence and nights filled with muffled noises</strong>, but I never felt envious of others' lives. So what if my friend has something that I don't? I'm sure he also doesn't have something that I own.</p>
                <br>
          <p><strong>Living with that kind of mentality isn't bad unless you realize that you're the only one who thinks like that.</p></strong>
                <br>

          <p>Something happened, and that turned my life into a downward spiral. From that day, I keep hearing this sentence all over again: <i>"There's someone else out there who's having it harder than you do."</i> If I can receive a penny every time I hear that, then I wouldn't probably have to worry about my future, but yeah, things are not like that in real life.</p>
                <br>

          <strong><p>The only thing I gained from having that being drilled into my ears is hating the word sympathy.</p></strong>
                <br>

          <p>Those people are probably just trying to cheer me up and just want me to keep my chin up, even so, I don't think it's right.</p>
                <br>

          <p>My parents taught me to never look down on others, and just because I'm having a hard time, it doesn't mean I have to put myself in other's shoes to make me feel a little bit better. We're all fighting our own battles anyway. I used to think that I can't sympathize with anything in my surroundings and that I'm not in a position to be nosy or worry about others as my current life is already worrisome. Little did I know is that I was fooling myself. If sympathizing makes you look and feel for another's misfortune as self-comfort, then I'll just let myself live without it.</p>
                <br>

          <strong><p>We have to realize that taking advantage of one's pains and scars doesn't make us more dominant than that person.</p></strong>
        `,
      image: SomethingPicture,
      stats: {
        views: 50,
        comments: 0,
        likes: 4,
      },
    },
    {
      id: 2,
      title: "A writer's mind and a movie.",
      preview:
        "I'm always fascinated by how a writer's mind works. I can't deny it. Every time I watch a movie, I tend to utter those words...",
      date: "Nov 21, 2020",
      content: `      
          <strong><h2>"I'm always fascinated by how a writer's mind works. I can't deny it."</h2></strong>
         <br>
          <p>Every time I watch a movie, I always tend to utter those words unintentionally. I just can't help it. Everyone around me knows I'm a movie enthusiast, and I would say they're right. Though there's a catch — I often watch movies that are about suicides.</p>
            <br>
          <p>Recently, in the middle of a movie with my friend, he said something about how the writer must've experienced those scenarios before and probably took it as an inspiration for the movie. He had a point, but I thought it was a joke and laughed. Not until I got home — I contemplated what he said and thought about the exact time the sun rose yesterday.</p>
                  <br>
          <p>Five years ago, there was this movie that I watched. Everything was different back then, as well as what the movie was about. It's not about suicide, but about a man dying. Before watching it, I always believed that movies exaggerated the way a person reacts to someone's death. Little did I know, writers know better than the viewers.</p>
              <br>
          <p>The movie had no title, and it only had one character — the man himself. It was several days long, but I watched it all the way through in the middle of a room full of agony. Definitely not entertaining, but appreciably more emotional than I expected. The man couldn't say any words, but I could feel his emotions as his tears ran down his face. He was not speaking, yet I could hear his thoughts and what he was trying to say. He wanted me, as his viewer, to live my life to the fullest.</p>
              <br>
          <p>As the sound of screaming and crying in my surroundings grew louder, I also felt emotional as the movie reached its end. The movie ended abruptly, as the man's wife closed his eyes at the same time.</p>
              <br>
          <p>I tried to cry, but I couldn't. I was bothered by the man and what he probably wanted to say. Since then, that movie got a special place in my heart, and I continued living with it. Left hanging and unanswered, I attempted to seek answers for myself.</p>
              <br>
          <p>Several years have passed, yet I still don't have the answers I've been looking for. I'm still confused and bothered. Even though the movie has ended, it continuously plays inside my head. It's much more emotional today than any other day. Maybe because the sun rose at the exact same time as yesterday? I don't know. It just seems like it rises too slow but sets too fast.</p>
              <br>
          <p>This day, I woke up around 5:30. Nothing different, as I'm used to waking up at that time, but the sky looked brighter. It felt nostalgic. I opened my phone, saw the date, and thought to myself — this is probably why.</p>
              <br>
          <p>I'm always fascinated by how a writer's mind works, and I can't deny it. The past five years of my life are indeed a mess, but also a blessing. Almost everything has changed, except for the fact that I'm still me — and I'm still living like this.</p>
              <br>
          <strong><p>My life is a movie that doesn't have a McGuffin, and this is my script. I'm the one who wrote this.</p></strong>
              <br>
          <p>Today marks the fifth death anniversary of my father, and his life was a movie too. His death influenced me a lot up to this day. If you're watching me somewhere, I'd like to say I still have stories left unshared for you.</p>
              <br>
          <p>Mother and I are currently looking for a job. She was cut off from her work last week due to a lack of funds. You don't have to worry about your youngest son. He's eating well, and he's fatter than ever.</p>
              <br>
          <p>If we ever meet again someday, let's sit for a drink. I'll take a cup of coffee, and I'll bring you your alcohol of choice. I'll tell you how my life went after that day, and you can help me understand how your life was before that day.</p>
        `,
      image: WriterMind,
      stats: {
        views: 50,
        comments: 0,
        likes: 4,
      },
    },
    {
      id: 3,
      title: "The Sunset I Always Wait For.",
      preview:
        "I'll tell you my story, so please hear me out. Just to let you know, I started writing this at 6:02 PM earlier. I'm really glad to say that...",
      date: "Nov 21, 2020",
      content: `
          <strong><h2>The Sunset I Always Wait For.</h2></strong>
        <br>
          <p>I'll tell you my story, so please hear me out. Just to let you know, I started writing this at 6:02 PM earlier. I'm really glad to say that it's been a while since the last time I encountered you, and this is definitely the feeling I'm longing for.</p>
      <br>
          <p>I don't know if it's maybe because I've been dwelling on nights where the moon is nowhere to be found, but everything has changed now. Back then, I was always scared when the sky was about to change its colors, and that's when I realized that stars aren't as comforting as they used to be. Under the blanket of heavenly bodies, I was alone, listening to the sound of the cold breeze. I was hoping for the sunny days to come as soon as possible, since I felt like the only way to continue was by closing the curtains by myself.</p>
      <br>
          <p>I wouldn't lie — it's all because I've been fighting my demons by myself for quite some time. My only escape was by looking at the vast emptiness above me, whether it was morning, afternoon, or evening. That's when I thought to myself that I'm rather lonely than alone.</p>
      <br>
          <p>And there's this one thing that I've noticed: it feels like the day is much longer than it usually is, and I always lose track of what part of the day it is. To put it simply, I always feel lethargic right after waking up. Yes, I am aware of the sunrise, but I don't think there's really a sunset that would guide me to the start of my evening. I almost got used to it until one day, I saw a rainbow after the rain. And the ironic part is — the neverending rain had stopped. It's been going on for years, and I've been drowning for so long.</p>
      <br>
          <p>It's not just a mere rainbow. It's actually a sign that something good is about to happen, and that's the moment when I first started seeing the sunset again. Because of that, I'm not scared of facing the night, as I know there will be celestial bodies, the moon, and lights of the posts and lamps along the streets I'm walking on. It will never be that dark again since I'm now aware that the night is about to unfold.</p>
      <br>
          <p>After a long tiring day at work, I always look for you — you're my comfort. And no matter where I am, I know you'll be there.</p>
      <br>
          <p>I just want to remind you that you're more than what you think you are, and your presence and existence matter to me a lot. Now that you know how much value sunset has to me, please don't get tired of being there for me. Please keep in mind that after an exhausting day, I will always be here for you too.</p>
      <br>
          <p>It's evening now, and the sun has set. I'm writing this while you were sleeping and you woke up midway, so if you were just wondering what I'm doing — here it is.</p>
      <br>
          <p>I miss you.</p>
        `,
      image: DearSunset,
      stats: {
        views: 50,
        comments: 0,
        likes: 4,
      },
    },
  ];

  const openModal = (content: WrittenContent) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedContent(null), 300); // Clear content after animation
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
        <div className="w-16 h-1 bg-blue-600 mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg mb-4"
              >
                <div className="flex items-center mb-3">
                  {edu.logo && (
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-10 h-10 mr-4 rounded-full"
                    />
                  )}
                  <div>
                    <h4 className="text-xl font-medium text-white">
                      {edu.school}
                    </h4>
                    <p className="text-blue-500">{edu.years}</p>
                  </div>
                </div>
                <p className="text-gray-300">{edu.degree}</p>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Work Experience
            </h3>
            {workExperiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg mb-4"
              >
                <div className="flex items-center mb-3">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-10 h-10 mr-4 rounded-full"
                    />
                  )}
                  <div>
                    <h4 className="text-xl font-medium text-white">
                      {exp.company}
                    </h4>
                    <p className="text-blue-500">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300">{exp.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Written Content */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">My Pieces</h3>
          <p className="text-gray-300 mb-8">
            During college, I was confined to our subdivision in the mountainous
            area of San Mateo due to the pandemic lockdown. With limited
            opportunities for outside interaction, I turned to writing as a
            creative outlet. Here are some pieces I wrote during that time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenContent.map((article) => (
              <div
                key={article.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => openModal(article)}
              >
                {/* Image Section - Only show if image exists */}
                {article.image && (
                  <div className="h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h5 className="font-medium text-white">Rios Zoe Bunao</h5>
                      <p className="text-gray-400 text-xs">
                        {article.date} •{" "}
                        {Math.ceil(article.content.length / 1000)} min read
                      </p>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium text-white mb-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {article.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedContent && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <div>
                    <h5 className="font-medium text-gray-900">
                      Rios Zoe Bunao
                    </h5>
                    <p className="text-gray-600 text-sm">
                      {selectedContent.date} •{" "}
                      {Math.ceil(selectedContent.content.length / 1000)} min
                      read
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedContent.title}
                </h2>

                {/* Featured Image */}
                {selectedContent.image && (
                  <div className="mb-6">
                    <img
                      src={selectedContent.image}
                      alt={selectedContent.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: selectedContent.content }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
