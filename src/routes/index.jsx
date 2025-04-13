import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";

import Courses from "../pages/course/Course.jsx";
import CourseDetails from "../pages/course-details/CourseDetails.jsx";

import Signup from "../pages/signup/Signup.jsx";
import TeacherDetails from "../pages/teacher-details/TeacherDetails.jsx";
import Teacher from "../pages/teachers/Teachers.jsx";
import CourseCreation from "../pages/add-course/AddCourse";
import NewTeacher from "../pages/add-teacher/NewTeacher";
import LinkCoursetoTrainer from "../pages/link-course-trainer/LinkCoursetoTrainer";
import PaymentManagement from "../pages/payment-management/PaymentManagement";


function AppRoutes() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Signup />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "course-details",
          element: <CourseDetails />,
        },
        {
          path: "add-course",
          element: <CourseCreation />,
        },
        {
          path: "teachers",
          element: <Teacher />,
        },
        {
          path: "teacher-details",
          element: <TeacherDetails />,
        },
        {
          path: "add-teacher",
          element: <NewTeacher />,
        },
        {
          path: "link-course-trainer",
          element: <LinkCoursetoTrainer />,
        },
        {
          path: "payment-management",
          element: <PaymentManagement />,
        },
        {
          path: "*",  // Catch-all for unmatched routes
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default AppRoutes;
