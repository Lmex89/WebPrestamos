import Layout from '../components/Layout/Layout';
import SummaryCards from '../components/Payments/SummaryCards';
import PaymentsTable from '../components/Payments/PaymentsTable';
import ChartsSection from '../components/Charts/ChartsSection';

export default function DashboardPage() {
    return (
        <Layout>
            <SummaryCards />
            <ChartsSection />
            <PaymentsTable />
        </Layout>
    );
}
