import SidebarLayout from "../../components/SidebarLayout";

export default function ConsultationPage() {
  const userType = 'admin'; // Cambia a 'user' según sea necesario
  return (
    <SidebarLayout userType={userType}>
      <h1 className="">About Us</h1>
      <p>
        Welcome to the about page. This content will grow, but the sidebar will stay in place.
      </p>
  
    </SidebarLayout>
  );
}
