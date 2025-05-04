//useCourses.js

import { useState, useCallback, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

const useCourses = () => {


  const transformCourses = (courses) => {
    const coursesObj = {
      DANCE: [],
      POLE: [],
      FLEXIBILITY: [],
      PLAYGROUND: [],
      SPECIALS: [],
      ARIALSILK: [],
      KIDS: []
    };
    courses.forEach((course) => {
      if (coursesObj[course.group]) {
        coursesObj[course.group].push(course);
      }
    });
    return coursesObj;
  };



  return {
    transformCourses,

  };
};

export default useCourses;
