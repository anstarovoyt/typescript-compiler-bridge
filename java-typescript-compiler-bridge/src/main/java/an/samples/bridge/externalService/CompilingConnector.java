package an.samples.bridge.externalService;

import an.samples.utils.Util;

import java.io.*;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;


public class CompilingConnector {


    Socket socket;

    public CompilingConnector() {
        try {
            ProcessBuilder builder = new ProcessBuilder()
                    .command("node", Util.getAbsoluteResourcePath("external/externalService.js"));
            builder.directory(new File(Util.getAbsoluteResourcePath("external")));
            Process start = builder.start();

            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(start.getErrorStream()));
            String portLine = bufferedReader.readLine();

            socket = new Socket(InetAddress.getLoopbackAddress(),
                    Integer.parseInt(portLine.substring(1, portLine.length() - 1)));

            new Thread(() -> readData(bufferedReader)).start();
        } catch (IOException e) {
            Util.throwRuntime(e);
        }
    }

    public void compile(String file) {
        try {
            PrintStream writer = new PrintStream(socket.getOutputStream(), false, "UTF-8");
            writer.print(file);
            writer.flush();

            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            bufferedReader.readLine();

        } catch (IOException e) {
            Util.throwRuntime(e);
        }
    }

    private void readData(BufferedReader bufferedReader) {
        while (true) {
            try {
                System.out.println(bufferedReader.readLine());
            } catch (IOException e) {
                Util.throwRuntime(e);
            }
        }
    }
}
