import React from 'react'
import './Fullstack.css';
import FullstackHero from './FullstackHero';
import FullstackNav from './FullstackNav';
import HeroTextSection from './HeroTextSection';
import CourseStructure from './CourseStructure';
import Enterprises from './Enterprises';
import Framework from './Framework';


const Backend = () => {
  return (
    <div>
        <FullstackNav />
        <FullstackHero 
                title='Backend Development'
                year="2020"
                date="September 2022"
                location="Lagos State"
                duration="One year full-time or two years part-time"
                attendance="Four to five afternoons/evenings a week full-time or two to three evenings a week part-time, September to August"
        />
        <HeroTextSection
         header="Providing a basis for a variety of careers in business, government and academia, our MSc Economics is designed to equip you with tools and techniques for investigating important economic issues. It provides a grounding in mathematical and econometric techniques:"
         list1="Looking at the foundations of microeconomics and macroeconomics and their application to new economic problems"
         list2="familiarising you with advanced concepts and techniques used in economic analysis, and enabling you to access and evaluate current research output in academic journals and in the public and commercial domain"
         list3="providing you with the ability to use methods of economic analysis and related techniques in practical and professional contexts"
         list4="examining the issues behind current controversies in economics and finance
         "
         list5="training you in quantitative skills"
         list6="requiring you to combine your theoretical and quantitative understanding in an original piece of applied work."
         header2="This course is demanding and challenging. We expect you to be competent in intermediate microeconomics and macroeconomics, multivariable calculus, linear algebra and statistics and to understand the basic concepts in economics, so we can focus on developing your ability to do original applied work using advanced methods. You will learn to express original ideas in academic papers and to test them with the use of econometrics (covering linear and dynamic linear regression models, a wide variety of hypothesis tests and techniques for estimating systems of equations). Techniques will be illustrated with economic examples, such as models with rational expectations, as well as consumption, production and money demand functions."
         header3="Prospective students without the necessary prerequisites should apply for our Graduate Diploma in Economics, as it prepares you for the MSc."
         highlight="Highlight"
         newlist1="Since we started teaching this course, we have taught generations of economists, who have gone on to work at the Bank of England, the Treasury, the Civil Service, consultancy and in academia."
         newlist2="Birkbeck graduates are well respected by employers, who value the dedication and ability required to balance evening study with daytime occupations."
         newlist3="This course is recognised as a research training programme by the Economic and Social Research Council (ESRC). For UK and EU applicants intending to pursue research, ESRC studentships (one year for the Master’s course followed by three years of funding for research) may be available for candidates with a strong academic background."
         newlist4="In the most recent Research Excellence Framework (REF), more than half of our research outputs in Economics were ranked world-leading or internationally excellent."
        />
        <CourseStructure 
        text1="Core modules reinforce economic theory with practical application. They include preliminary courses in mathematical and statistical techniques, which take place in September and have to be passed in order to progress to the course."
        text2="Options provide specialised modules with current themes. Option module availability varies across years."
        text3="Options provide specialised modules with current themes."
        />
        < Enterprises/>
        <Framework />
    </div>
  )
}

export default Backend