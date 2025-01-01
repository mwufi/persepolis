import Sidebar from '@/components/Sidebar';

export default function InstagramPage() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar position="left" />
            <main className="flex-1 ml-16 mr-16 p-8">
                {/* Main content will go here */}
            </main>
        </div>
    );
}