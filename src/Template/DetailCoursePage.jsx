import React from 'react'
import { useParams } from 'react-router-dom';
import HeroDetailComponent from '../Component/DetailPage/HeroComponent';
import InformationComponent from '../Component/DetailPage/InformationComponent';
import CurriculumComponent from '../Component/DetailPage/CurriculumComponent';
import PriceCourseComponent from '../Component/DetailPage/PriceCourseComponent';
import ConstructorComponent from '../Component/DetailPage/ConstructorComponent';
const DetailCoursePage = () => {
const { courseId } = useParams();

console.log(courseId);

    return (
<>

<HeroDetailComponent courseId={courseId} />
<InformationComponent courseId={courseId} />
<CurriculumComponent courseId={courseId} />
<PriceCourseComponent courseId={courseId} />
<ConstructorComponent courseId={courseId} />

</>  )
}

export default DetailCoursePage