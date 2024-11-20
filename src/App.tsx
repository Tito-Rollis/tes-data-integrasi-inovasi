import { ButtonComponent } from './components/ButtonComponent';

function App() {
    return (
        <div className="flex flex-col  justify-center gap-48 items-center h-screen w-screen">
            <ButtonComponent colors="lightblue" icon={false} size="normal" tooltip={false} label="Test" />
            <ButtonComponent
                colors="lightblue"
                icon={false}
                size="normal"
                tooltip={true}
                tooltipPosition="right"
                label="Right tooltip"
            />
            <ButtonComponent
                colors="lightblue"
                icon={false}
                size="normal"
                tooltip={true}
                tooltipPosition="left"
                label="Left tooltip"
            />
            <ButtonComponent
                colors="lightblue"
                icon
                size="normal"
                tooltip={true}
                tooltipPosition="top"
                label="top tooltip"
            >
                <span className="material-symbols-rounded">favorite</span>
            </ButtonComponent>
            <ButtonComponent
                colors="lightblue"
                tooltip={false}
                icon={false}
                size="normal"
                tooltipPosition="bottom"
                label="bottom tooltip"
            />

            <ButtonComponent
                colors="lightblue"
                iconPosition="right"
                icon
                size="normal"
                tooltip={true}
                tooltipPosition="bottom"
                label="Right icon"
            >
                <span className="material-symbols-rounded text-3xl text-orange-500">favorite</span>
            </ButtonComponent>
        </div>
    );
}

export default App;
