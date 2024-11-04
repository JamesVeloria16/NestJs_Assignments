import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignment2')
export class Assignment2Controller {
@Get('Prime/:n')
    getPrime(@Param('n') n: number): string {
        if (isNaN(n) || n < 1) {
            return 'Please input positive number';
        }

        function isPrime(num: number): boolean {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return num > 1;
        }
        
        return JSON.stringify({
            isPrime: isPrime(n),
        });
    }
}