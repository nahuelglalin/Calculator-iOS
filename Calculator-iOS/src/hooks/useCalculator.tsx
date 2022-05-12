import { useRef, useState } from 'react';

enum Operadores {
    sum, substract, multiplication, division
}

export const useCalculator = () => {

    const [numberBefore, setNumberBefore] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOperation = useRef<Operadores>()

    const clean = () => {
        setNumber('0');
        setNumberBefore('0');
    }

    const makeNumber = ( numPressed: string ) => {

        if (number.includes(',') && numPressed === ',') {
            return;
        }
        if ( number.startsWith('0') || number.startsWith('-0')){

            if (numPressed === ',') {
                setNumber(number + numPressed);
            } else if ( numPressed === '0' && number.includes(',') ) {
                setNumber(number + numPressed);
            } else if (numPressed !== '0' && !number.includes(',')) {
                setNumber(numPressed);
            } else if (numPressed === '0' && !number.includes(',')){
                setNumber(number);
            } else {
                setNumber(number + numPressed);
            }
        } else {   
            setNumber(number + numPressed )
        }
    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const deleteNumber = () => {
        if (number.startsWith('-0')){
            setNumber('0');
        } else if (number.startsWith('0') ){
            return;
    
        } else if (number.length === 1 || ( number.length === 2 && number.startsWith('-'))) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        } 
    }

    const replaceNumberBefore = () => {
        if (number.endsWith('.')){
            setNumberBefore(number.slice(0, -1));
        } else {
            setNumberBefore(number);
        }
        setNumber('0');
    }

    const divide = () => {
        replaceNumberBefore();
        lastOperation.current = Operadores.division;
    }

    const multiply = () => {
        replaceNumberBefore();
        lastOperation.current = Operadores.multiplication;
    }

    const substract = () => {
        replaceNumberBefore();
        lastOperation.current = Operadores.substract;
    }

    const sum = () => {
        replaceNumberBefore();
        lastOperation.current = Operadores.sum;
    }

    const calculate = () => {
        switch (lastOperation.current) {
            case Operadores.sum:
                setNumber(String(Number(numberBefore) + Number(number)));
                break;
            case Operadores.substract:
                setNumber(String(Number(numberBefore) - Number(number)));
                break;
            case Operadores.multiplication:
                setNumber(String(Number(numberBefore) * Number(number)));
                break;
            case Operadores.division:
                if (number == '0'){
                    setNumber('Error');
                } else {
                    setNumber(String(Number(numberBefore) / Number(number)));
                }
                break;
            default:
                break;
        }
        setNumberBefore('0');
    }

    return {
        numberBefore, 
        number,
        clean,
        positiveNegative,
        deleteNumber,
        divide,
        makeNumber,
        substract,
        multiply,
        sum,
        calculate
    }

}