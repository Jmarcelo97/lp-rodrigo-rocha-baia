type ThankYouCardProps = {
    children: React.ReactNode;
};

export function ThankYouCard({ children }: ThankYouCardProps) {
    return (
        <div className="flex flex-col bg-white text-black rounded-3xl p-8 w-full">
            {children}
        </div>
    );
}