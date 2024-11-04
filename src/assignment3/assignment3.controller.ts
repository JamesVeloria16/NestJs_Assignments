import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignment3')
export class Assignment3Controller {
        @Get('factorial/:n')
        factorial(@Param('n') n: number): any {
            if (isNaN(n) || n < 0) {
                throw new Error('Please input a positive number (' + NaN + ')');
            }
    
            function fact(n: number): number {
                if (n === 0) {
                    return 1;
                }
                return n * fact(n - 1);
            }
    
            return { "factorial": fact(n) };
    
        }
    
    }