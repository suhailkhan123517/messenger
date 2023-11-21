import getUsers from "@/actions/getUsers";
import Sidebar from "@/components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <main className="lg:pl-20 h-full">
          <UserList items={users} />
          {children}
        </main>
      </div>
    </Sidebar>
  );
}
