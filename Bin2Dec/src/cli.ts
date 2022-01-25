import cowmand from 'cowmand';
import bin2dec from './index';

const program = cowmand();

program.use(async (context, terminal) => {
  const binary = await terminal.ask('Write a binary number: ');

  try {
    const decimal = bin2dec(binary);

    return terminal.log(`The binary ${binary} to decimal is ${decimal}`).end();
  } catch (error) {
    return terminal
      .error('Error:', [
        error instanceof Error ? error.message : 'Error in convert binary'
      ])
      .end(1);
  }
});

program.start();
