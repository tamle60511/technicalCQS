import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex flex-col items-center pb-2">
            <AppLogoIcon className="text-white dark:text-black" />
            <div className="ml-1 hidden flex-1 text-left lg:grid">
                <span className="mb-0.5 truncate text-[10px] leading-none font-semibold uppercase">precision die casting inc</span>
            </div>
        </div>
    );
}
