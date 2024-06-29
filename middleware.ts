import { NextResponse, NextRequest } from "next/server";

// Define the roles and their restricted paths
const rolePaths = {
  user: ["/admin", "/dashboard", "/supplierdashboard"],
  admin: ["/dashboard", "/supplierdashboard"],
  agency: ["/admin", "/supplierdashboard"],
  supplier: ["/admin", "/dashboard"],
};

// Define role mapping based on roleId
const roleMapping: Record<string, string> = {
  '667bda9080e2951e9ad32b24': 'admin',
  '667bdab780e2951e9ad32b25': 'agency',
  '667bdad080e2951e9ad32b26': 'supplier',
  '667bdade80e2951e9ad32b27': 'user', // Replace 'normalRoleId' with the actual role ID for normal users
};

// Helper function to extract roleId
const extractRoleId = (value: any) => {
  if (typeof value === 'string') {
    const match = value.match(/"([^"]+)"/);
    return match ? match[1] : null;
  }
};

// Custom middleware function
export async function middleware(req: NextRequest) {

  // const { pathname } = req.nextUrl;
  // const roleCookie = req.cookies.get("role");
  
  // // Extract roleId from the cookie value
  // const roleId = roleCookie
  // const role =  extractRoleId(roleCookie?.value) || roleCookie.value

  // console.log("Extracted roleId:", roleId);
  // console.log("Mapped role:", role);

  // // If roleId or role is not valid, redirect to login page or handle accordingly
  // if (!roleId || !role) {
  //   return NextResponse.redirect("http://localhost:3000/auth/login");
  // }

  // // Check if the user tries to access a restricted path
  // const restrictedPaths = rolePaths[role];
  // if (restrictedPaths && restrictedPaths.includes(pathname)) {
  //   // Redirect users to the home page if they try to access restricted paths
  //   return NextResponse.redirect("http://localhost:3000/");
  // }

  // // Allow the request to proceed
  // return NextResponse.next();
}

// Export the matcher configuration for paths
export const config = {
  matcher: ["/admin", "/dashboard", "/supplierdashboard"],
};
