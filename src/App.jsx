import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin/*" element={<AdminLayout />}>
                    {/* Nested Routes */}
                    <Route path={} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
