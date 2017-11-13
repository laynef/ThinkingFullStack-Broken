import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Pages
import {
	MasterPage,
	AuthPage,
	PublicPage,
	NotFoundPage,
	PublicMasterPage,
	FrontendVBackendPage,
	MultipleDevices,
	EnvironmentSetupPage,
	ReusableCodePage,
	ServerClientPage,
	BackendCachingPage,
	CryptologyPage,
	DocumentationForTeamsPage,
	ErrorHandlingPage,
	HTTPPage,
	ProxiesPage,
	QueryStringPage,
	ScabilityPage,
	SeparateApiPage,
	UniversalApiPage,
	WebsocketsPage,
	AssetsPage,
	AWSServicesPage,
	CDNPage,
	CompressionPage,
	DatabasePage,
	FileStoragePage,
	FileUploadsPage,
	LinuxServersPage,
	LoadBalancingPage,
	LoadingTimePage,
	NoHerokuNoDockerPage,
	OfflineWebApplicationsPage,
	ScalablePage,
	UIAssetsPage,
	CachingPage,
	ComponentTechniquesPage,
	CrossBrowserPage,
	DesignAllUsersPage,
	DesigningDevicesPage,
	DevelopLitePage,
	ReusableStylesPage,
	StateManagementPage,
	CleanCodeTechniquesPage,
	DataStructuresPage,
	CodingErrorHandlingPage,
	LanguagePatternsPage,
	OptimizationPage,
	RenderAtLowerLevelsPage,
	BuildFlowsPage,
	BusinessNeedsPage,
	CutCostsPage,
	DevelopTimelyPage,
	EnterpriseEnvironmentsPage,
	NoCuttingCornersPage,
	GitWorkflowPage,
	MarketingToolsPage,
	NeverAssumePage,
	ProactiveProgrammingPage,
	ScrumPage,
	SEOPages,
	SeparateCodeBasePage,
	TimeCostsPage,
	WebBusinessPage,
	NormalizeDataPage,
} from '../pages/containers';


export default () => {
	return (
		<Route path="/">

			<Route component={PublicMasterPage}>
				<IndexRoute component={PublicPage} />
			</Route>

			<Route component={MasterPage}>
				<Route path="dashboard" component={AuthPage} />
				<Route path="practices">
					<Route path="multiple/devices" component={MultipleDevices} />
					<Route path="server/client" component={ServerClientPage} />
					<Route path="reusable" component={ReusableCodePage} />
					<Route path="normalize" component={NormalizeDataPage} />
					<Route path="environments" component={EnvironmentSetupPage} />
					<Route path="both/sides" component={FrontendVBackendPage} />
				</Route>
				<Route path="api">
					<Route path="caching" component={BackendCachingPage} />
					<Route path="cryptology" component={CryptologyPage} />
					<Route path="documentation" component={DocumentationForTeamsPage} />
					<Route path="errors" component={ErrorHandlingPage} />
					<Route path="proxies" component={ProxiesPage} />
					<Route path="query/strings" component={QueryStringPage} />
					<Route path="scalable" component={ScabilityPage} />
					<Route path="separate/design" component={SeparateApiPage} />
					<Route path="universal/design" component={UniversalApiPage} />
					<Route path="websockets" component={WebsocketsPage} />
				</Route>
				<Route path="aws">
					<Route path="assets" component={AssetsPage} />
					<Route path="services" component={AWSServicesPage} />
					<Route path="cdn" component={CDNPage} />
					<Route path="http" component={HTTPPage} />
					<Route path="compression" component={CompressionPage} />
					<Route path="database" component={DatabasePage} />
					<Route path="storage" component={FileStoragePage} />
					<Route path="uploads" component={FileUploadsPage} />
					<Route path="linux" component={LinuxServersPage} />
					<Route path="balancing" component={LoadBalancingPage} />
					<Route path="time" component={LoadingTimePage} />
					<Route path="no/third/parties" component={NoHerokuNoDockerPage} />
					<Route path="offline" component={OfflineWebApplicationsPage} />
					<Route path="scaling" component={ScalablePage} />
				</Route>
				<Route path="ui">
					<Route path="assets" component={UIAssetsPage} />
					<Route path="caching" component={CachingPage} />
					<Route path="components" component={ComponentTechniquesPage} />
					<Route path="cross/browsers" component={CrossBrowserPage} />
					<Route path="for/all/users" component={DesignAllUsersPage} />
					<Route path="devices" component={DesigningDevicesPage} />
					<Route path="lite" component={DevelopLitePage} />
					<Route path="reusable" component={ReusableStylesPage} />
					<Route path="state" component={StateManagementPage} />
				</Route>
				<Route path="patterns">
					<Route path="clean/code" component={CleanCodeTechniquesPage} />
					<Route path="data/structures" component={DataStructuresPage} />
					<Route path="error/handling" component={CodingErrorHandlingPage} />
					<Route path="languages" component={LanguagePatternsPage} />
					<Route path="optimize" component={OptimizationPage} />
					<Route path="lower/levels" component={RenderAtLowerLevelsPage} />
				</Route>
				<Route path="business">
					<Route path="flows" component={BuildFlowsPage} />
					<Route path="needs" component={BusinessNeedsPage} />
					<Route path="cut/costs" component={CutCostsPage} />
					<Route path="develop" component={DevelopTimelyPage} />
					<Route path="git/workflow" component={GitWorkflowPage} />
					<Route path="marketing/tools" component={MarketingToolsPage} />
					<Route path="never/assume" component={NeverAssumePage} />
					<Route path="proactive" component={ProactiveProgrammingPage} />
					<Route path="scrum" component={ScrumPage} />
					<Route path="seo" component={SEOPages} />
					<Route path="separate/code/base" component={SeparateCodeBasePage} />
					<Route path="time/costs" component={TimeCostsPage} />
					<Route path="web/business" component={WebBusinessPage} />
					<Route path="environments" component={EnterpriseEnvironmentsPage} />
					<Route path="no/cutting/corners" component={NoCuttingCornersPage} />
				</Route>
			</Route>

			<Route path="*" component={NotFoundPage} />
		</Route>
	);
};
