import '../../../styles/components/structure/layouts/layout.css'


export default function Layout({ children }) {
    return(
        <div className='container'>
            {children}
        </div>
    )
}