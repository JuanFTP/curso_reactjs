import { RecoilRoot, useRecoilState, atom, useRecoilValue, selector } from 'recoil';
import './App.css';

function App() {
	return (
		<RecoilRoot>
			<div className="container">
				<TextInput />
				<Counter />
			</div>
		</RecoilRoot>
	);
}

// NOTE Definición de un átomo de Recoil
const textInputState = atom({
	key: "textInputState",
	default: ""
});

// NOTE Toma un átomo y retorna una acción o resultado de ejecución específica
const textInputSelector = selector({
	key: "textInputSelector",
	get: ({ get }) => {
		const text = get(textInputState);
		return text.length;
	}
});

// NOTE Uso del hook useRecoilState, recibe un atom como parámetro o constructor
function TextInput() {
	const [text, setText] = useRecoilState(textInputState);
	const onInputChange = (input) => {
		setText(input.target.value);
	}

	return (
		<div className="line-input">
			<input value={text} placeholder="Type any..." onChange={onInputChange} />
		</div>
	);
}

// NOTE Consumo de la información de un átomo dentro del estado RecoilRoot
function Counter() {
	// NOTE Obtención de la información pero solo de lectura
	// NOTE De acuerdo a su selector este solo nos devolverá el tamaño de la cadena por que así se colocó en el selector
	const length = useRecoilValue(textInputSelector);

	return (
		<span className="line-box">{length}</span>
	);
}

export default App;
